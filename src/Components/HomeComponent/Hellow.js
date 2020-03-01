import React from 'react';

export default function Hellow() {
  return (
    <div className="about">
      <h1 className="mt-5 text-center" >自己紹介</h1>

      <div className="row mt-5" >
        <ul className="col-md h5 py-2">
          <li><span>名前：</span>加藤　幸佑 (22歳)</li>
          <li><span>勉強している言語:</span> Javascript・Typescript</li>
          <li><span>フレームワーク: </span>React,Vue,bootStrap4</li>
          <li><span>勉強期間:</span>11ヵ月</li>
        </ul>
        <div className="col-md  w-50 py-2">
          <p className="h6">主にフロント側の勉強をしています。将来敵にはサーバーサイド側も書けるエンジニアを目指しています。</p>
          <p className="h6">今回、3択のクイズアプリと、読書記録表を作りました。<br />読書記録表はReactのuseReducerとcontextを使用し拡張しやすくしまいした。</p>

          <a href="https://github.com/kosuke090/react/tree/master/src" target="_blanck"> git hubにソースコードがあります</a>
        </div>
      </div>
    </div>
  )
}
