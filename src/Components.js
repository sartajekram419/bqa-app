import styled from 'styled-components'



export const Form = styled.form`
    background: #fff;
    display: flex;
    padding: 50px 0px 40px 0px;
    justify-content: space-between;
    flex-direction: column;
    margin: auto;
    width: 55%;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 70%;
    }
`;

export const Div = styled.div`
    background: #EAEAF5;
    display: flex;
    padding: 3px 0px 0px 0px;
    justify-content: start;
    flex-direction: column;
    flex-wrap: wrap;
    margin: auto;
    width: 55%;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 70%;
    }
    overflow: scroll;
    border-radius: 5px 5px 5px 5px;
    border: 2px solid #EAEAF5;
`;

export const Button = styled.button`
    background: #1ce636;
    
    align-items: center;
    justify-content: center;
    
    color: white;
    width: 100%;
    max-width: 150px;
    height: 40px;
    @media (max-width: 768px) {
        width: 35%;
    }
    margin-top: 0px;
    margin-bottom: 20px;
    cursor: pointer;
    border-radius:10px 10px 10px 10px;
    border: 2px solid #1ce636;
`;