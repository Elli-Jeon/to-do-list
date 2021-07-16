import React from 'react'
import styled from "styled-components"

// Components
import CorkBoard from '../../components/CorkBoard/CorkBoard';
import CheckPriorityButton from '../../components/CheckPriorityButton/CheckPriorityButton';
import AddTodoFormContainer from '../../components/AddTodoFormContainer/AddTodoFormContainer';
import AddTodoForm from '../../components/AddTodoForm/AddTodoForm';
import AddTodoInput from '../../components/AddTodoInput/AddTodoInput';
import DatePicker from '../../components/DatePicker/DatePicker';
import AddTodoSubmitButton from '../../components/AddTodoSubmitButton/AddTodoSubmitButton';
import Reference from '../../components/Reference/Reference';

import Todo from '../../components/Todo'

const BoardPresenter = ({context, todo, todoSubmit, addTodoValue, setSelectedDay, changeSelectedDay, checkPriority}) => {
    const MainSectionStyle = styled.main`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 70vh;
        position: relative;
    `;
    
    return (
        <MainSectionStyle>
            <CorkBoard>
                {context.state.todos.map((eachTodo)=>{
                    return (
                    <Todo key={eachTodo.id} todo={eachTodo} />
                    )
                })}
                <CheckPriorityButton onClick={checkPriority}>Check Priority</CheckPriorityButton>
            </CorkBoard>
            <AddTodoFormContainer>
                <AddTodoForm>
                    <label>할 일을 적어주세요!</label>
                    <AddTodoInput onChange={addTodoValue} value={todo} />
                    <label>마감 일을 설정해주세요!</label>
                    <DatePicker onChange={setSelectedDay} changeSelectedDay={changeSelectedDay}/>
                    <AddTodoSubmitButton onClick={todoSubmit}>Add</AddTodoSubmitButton>
                </AddTodoForm>
            </AddTodoFormContainer>
            <Reference>
                <a target="_blank" href="https://icons8.com/icon/mrLvzJucXKo2/calculate">Calculate</a> icon by <a target="_blank" href="https://icons8.com">Icons8  </a>
                <a target="_blank" href="https://icons8.com/icon/9i9HlS0bGONj/pencil">Pencil</a> icon by <a target="_blank" href="https://icons8.com">Icons8  </a>
                <a target="_blank" href="https://icons8.com/icon/MbRthDvtoWcb/memo">Memo</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            </Reference>
        </MainSectionStyle>
    )
}

export default BoardPresenter
