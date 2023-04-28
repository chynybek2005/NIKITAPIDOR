import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Karim = () => {

    const GoldCardState = useSelector((state) => state)
    const dispatch = useDispatch()    
    return (
        <div>
            <h1>{GoldCardState.user}</h1>
            <h1>{GoldCardState.cash}</h1>


            <button onClick={() => dispatch({
                type: "ADD CASH",
                 payload: Number(prompt('попoлните баланс блять'))})}
                 >
                    {" "}
                    + cash{" "}
                    </button>


                    <button onClick={() => dispatch({
                type: "REMOVE CASH",
                 payload: Number(prompt('снять баланс блять'))})}
                 >
                    {" "}
                    - cash{" "}
                    </button>

                    
        </div>
    );
};

export default Karim;