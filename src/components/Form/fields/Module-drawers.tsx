// TODO: Desabilitar Quantidade quando a opção for "Sem Gavetas"

import type { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<FieldValues>;
};

export function ModuleDrawers({ register }: Props) {
  return (
    <div className="flex flex-row">
      <label className="basis-2/3">
        Tipo da Gaveta
        <select
          {...register("moduleDrawerType")}
          id="drawers"
          className="h-12 w-[16rem] bg-[#f3f3f3]! rounded-r-md"
        >
          <option value="semGavetas">Sem Gavetas</option>
          <option value="interna">Interna</option>
          <option value="externa">Externa</option>
        </select>
      </label>

      <label className="basis-1/3">
        Quantidade
        <input
          type="number"
          {...register("moduleDrawerQuantity")}
          id="drawersQuantity"
          className="h-12 w-[8rem] p-2 bg-[#f3f3f3]! rounded-r-md"
        />
      </label>
    </div>
  );
}
