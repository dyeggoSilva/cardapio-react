import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import type { FoodData } from "../../interfaces/FoodData";
import "./modal.css";

interface InputProps {
  label: string;
  value: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateValue: (value: any) => void;
}

interface ModalProps {
  closeModal(): void;
}
const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      ></input>
    </>
  );
};

export function CreateModal({ closeModal }: ModalProps) {
  const [titulo, setTitulo] = useState("");
  const [preco, setPreco] = useState(0);
  const [img, setImg] = useState("");
  const { mutate, isSuccess } = useFoodDataMutate();

  const submit = () => {
    const foodData: FoodData = {
      titulo,
      preco,
      img,
    };
    mutate(foodData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastre un novo item no cardápio</h2>
        <form className="input-container">
          <Input label="titulo" value={titulo} updateValue={setTitulo} />
          <Input label="preco" value={preco} updateValue={setPreco} />
          <Input label="img" value={img} updateValue={setImg} />
        </form>
        <button onClick={submit} className="btn-secondary">
          Postar
        </button>
      </div>
    </div>
  );
}
