import React, { Component } from "react";
const listfood=[
    {id:1,type:"fruit",name:"banane"},
    {id:1,type:"ligume",name:"tomate"},
    {id:1,type:"ligume",name:"carote"},
    {id:1,type:"fruit",name:"orange"},
    {id:1,type:"fruit",name:"ananas"}
]
function List(e){
    const filterfood=listfood.filter(mf=>mf.type===e.pops)
    return(
    <div>
        <ul>
        {filterfood.map((e)=><li>{e.name}</li>)}
        </ul>
    </div>
    )
}
export default List