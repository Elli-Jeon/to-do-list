import styled from "styled-components";
import calculator from "../../assets/images/calculator.png"

const CheckPriorityButton = styled.button`
    position : absolute;
    top : 1rem;
    right : 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width : 10rem;
    padding : 1rem;
    background: url(${calculator}) center no-repeat;
    background-size: contain;
    border : none;
    color : #e53935;
    outline: none;
    font-weight: 900;
    font-size: 2rem;
    &:hover {
        transform: rotate(-25deg);
    }
`;

export default CheckPriorityButton;