import styled from "styled-components";
import corkBoard from "../../assets/images/corkBoard.jpg"

const CorkBoard = styled.div`
    position : absolute;
    top : 3rem;
    min-width : 80%;
    min-height: 60%;
    color : white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: url(${corkBoard}) no-repeat center;
    background-size: cover;
`;

export default CorkBoard;