import { useEffect, useState} from 'react'
import { getAllRegularsUsers} from '../../api/userRegular.api';
import { GraphBars } from '../GraphBars';
import { GraphPie } from '../GraphPie';
export function UsersRegularList() {
    
    const[usersRegular, setUsersRegular] = useState([]);

    useEffect(() => { 
        async function loadUsersRegulars(){
            const res = await getAllRegularsUsers();
            setUsersRegular(res.data);
        }
        loadUsersRegulars();
    },[]);

    return(
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Titulo</th>
                                                    <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripcion</th>
                                    <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Botón 1</th>
                                    <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Botón 2</th>
                                    <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tiempo en pantalla</th>
                                </tr>
                                {usersRegular.map( (user) => (
                                    <tr key={user.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {user.title}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {user.description}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {user.clicksButtons1}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {user.clicksButtons2}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {user.screenTime}
                                        </td>
                                    </tr>
                                ))}
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="inline-block">
                                <GraphBars data={usersRegular} />
                </div>
                <div className="inline-block">
                                <GraphPie data={usersRegular} />
                </div>
                </div>
        </div>
    )
}
