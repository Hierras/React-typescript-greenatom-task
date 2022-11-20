import React from "react";
import { CurrencyLabel } from "@skbkontur/react-ui";
import { Vehicle, vehicleTypeTitles } from "../data/vehicles/contracts";

interface TableItemInterface{
    key: string,
    number: number,
    vehicle: Vehicle,
    vehicleType: string
}

const TableItem: React.FC<TableItemInterface> = (props) => {
    return (
        <tr>
            <td>{props.number}</td>
            <td>{props.vehicleType}</td>
            <td>{props.vehicle.title}</td>
            <td>
                <CurrencyLabel value={props.vehicle.price} fractionDigits={2} />
            </td>
        </tr>
    );
};

export const Table: React.FC<{vehicles: Vehicle[]}> = (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Тип транспорта</th>
                <th>Название</th>
                <th>Цена, ₽</th>
            </tr>
            </thead>
            <tbody>
            {props.vehicles.map((x, i) => (
                <TableItem
                    key={x.id} 
                    number={i + 1}
                    vehicle={x} 
                    vehicleType={vehicleTypeTitles[x.type]}/>
            ))}
            </tbody>
        </table>
    );
};
