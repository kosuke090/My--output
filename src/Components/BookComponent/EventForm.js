import React, { useState, useContext } from 'react';

import { ADD_BOOK, ADD_LOG, DELETE_ALL_OPERATION_LOGS } from "./actions";
import AppContext from "./Contexts/AppContext";
import { timeCurent } from "./utils"

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [writer, setwriter] = useState("");

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_BOOK,
      title,
      writer
    });
    dispatch({
      type: ADD_LOG,
      description: `${state.events.length + 1}番目の本を追加しました`,
      operateAt: timeCurent()
    })
    setwriter('');
    setTitle('');
  }
  const disabled = title === "" || writer === "";

  const deleteAllOperationLogs = e => {
    e.preventDefault()
    const result = window.confirm('全ての操作ログを本当に削除しても良いですか？')

    if (result) {
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS
      })
    }
  }

  return (
    <>
      <h4 className="mt-5">読書記録</h4>
      <form>
        <div className="form-group">
          <label htmlFor="form-input">タイトル</label>
          <input type="text" className="form-control" id="form-input" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <label htmlFor="form-text">作者</label>
        <input type="text" id="form-text" className="form-control" value={writer} onChange={e => setwriter(e.target.value)} />

        <button onClick={addEvent} className="btn btn-primary mt-3" disabled={disabled}>本を追加</button>

        <button className="btn btn-danger mt-3" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length === 0}>全ての操作ログを削除する</button>
      </form>
    </>
  )
}

export default EventForm
