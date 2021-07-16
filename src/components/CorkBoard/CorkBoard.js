import styled from "styled-components";
import corkBoard from "../../assets/images/corkBoard.jpg"

const CorkBoard = styled.div`
    position: relative;
    min-width : 800px;
    min-height: 400px;
    margin-top : 2rem;
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