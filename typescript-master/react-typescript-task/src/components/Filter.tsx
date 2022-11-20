import React, { useState, useEffect } from "react";
import { VehicleApi } from "../data/vehicles/api";
import { Vehicle, VehicleType } from "../data/vehicles/contracts";
import { VehicleTypeSelect } from "./VehicleTypeSelect";

interface IRerenderFilter{rerenderVC: (data: Vehicle[]) => void;}

export const Filter: React.FC<IRerenderFilter> = ({rerenderVC}) => {
    const [title, setValue] = useState("");
    const [type, setOption] = useState<VehicleType | null>(null);

    useEffect(() => { 
        const data = VehicleApi.search({title, type});
        rerenderVC(data);
    }, [title, type]);


    function cleanString(input: string) { // Очищаем строку от недопустимых символов
        const regexp = /([?*+[\]\\()|])/g;
        if(input.match(regexp)){
            
            alert("Недопустимый символ: " + input);
            return input.replace(regexp, "");
        }
        return input;
    }

    function handleInput(e: React.ChangeEvent<HTMLInputElement>){
        setValue(cleanString(e.target.value));   
    }

    return <div>
        <label htmlFor="inputVCTitle">Введите название ТС: </label>
        <input
            value={title} 
            onChange={handleInput} 
            type="text" 
            name="inputVCTitle" 
            id="inputVCTitle" />

        <label htmlFor=""> Выберите тип ТС: </label>
        <VehicleTypeSelect
            value={type}
            onChange={setOption}
        />
    </div>
};