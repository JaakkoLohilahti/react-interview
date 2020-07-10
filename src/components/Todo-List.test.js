import { shallow } from 'enzyme';
import React from 'react';
import TodoList from './Todo-List.component';

 it('expect to render TodoList component', () => {
     const mocknewTodo = [
         {
             id: 1,
             name: 'Test to do',
             complete: false
         }

     ]
    expect(shallow(<TodoList todo={mocknewTodo}/>).length).toEqual(1);
})
