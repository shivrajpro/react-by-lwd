import React from "react"

export default function TableColumns(props) {
    return (<React.Fragment key={Math.random()} >
        <tr >
            <td className="px-2 border border-gray-500">{props.user.id}</td>
            <td className="px-2 border border-gray-500">{props.user.name} </td>
        </tr>
    </React.Fragment>)
}