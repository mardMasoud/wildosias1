import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { deleteRowsById } from "../../services/apiCabins";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";

const TableRow = styled.div`
    display: grid;
    grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
    column-gap: 2.4rem;
    align-items: center;
    padding: 1.4rem 2.4rem;

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }
`;

const Img = styled.img`
    display: block;
    width: 6.4rem;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    object-position: center;
    transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
    font-family: "Sono";
`;

const Price = styled.div`
    font-family: "Sono";
    font-weight: 600;
`;

const Discount = styled.div`
    font-family: "Sono";
    font-weight: 500;
    color: var(--color-green-700);
`;

export default function CabinRow({ cabin }) {
  const [showForm,setShowForm]=useState(false)
    const { image, name, discount, regularPrice, maxCapacity, id: cabinId } = cabin;
    const queryClinet = useQueryClient();
    const { error, mutate, isLoading } = useMutation({
        mutationFn: deleteRowsById,
        onSuccess: () => {
            toast.success("success");
            queryClinet.invalidateQueries({ queryKey: ["cabin"] });
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return (<>
        <TableRow role="row">
            <Img src={image} />
            <Cabin>{name}</Cabin>
            <div>{maxCapacity}</div>
            <Price>{formatCurrency(regularPrice)}</Price>
            <Discount>{formatCurrency(discount)}</Discount>
            <div>
              
                <button onClick={() => setShowForm(!showForm)
                }
               >
                    edit
                </button>
                <button onClick={() => mutate(cabinId)} disabled={isLoading}>
                    delete
                </button>
            </div>
            
        </TableRow>
        {console.log(showForm)}
        {showForm&&<CreateCabinForm cabinToEdit={cabin}/>}
        </>
    );
}
