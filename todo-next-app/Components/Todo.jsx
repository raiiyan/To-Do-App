import React from 'react'

const Todo = () => {
    return (
        <tr className="bg-white border-b">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-black">
                1
            </th>
            <td className="px-6 py-4">
                Study
            </td>
            <td className="px-6 py-4">
                Learn Next JS
            </td>
            <td className="px-6 py-4">
                Pending
            </td>
            <td className="px-6 py-4 flex gap-2">
                <button className='py-2 px-4 bg-red-500 text-white'>Delete</button>
                <button className='py-2 px-4 bg-green-500 text-white'>Done</button>
            </td>
        </tr>
    )
}

export default Todo