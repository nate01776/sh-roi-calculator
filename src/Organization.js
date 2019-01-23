import React from 'react';

const Organization = props => {
    let salaryData = props.orgSalaries
    let countData = props.orgCount

    return (
        <div className="org-column">
            <h1>Organization</h1>
            <div className="salary-table">
                <table>
                    <tbody>
                        <tr>
                            <th>Role</th>
                            <th>Yearly Salary</th>
                        </tr>
                        <tr>
                           <td>Architect</td>
                           <td>$
                                <input 
                                    name="arch" 
                                    type="text" 
                                    onChange={props.handleSalaryChange} 
                                    defaultValue={salaryData.arch} 
                                />  
                           </td>
                        </tr>
                        <tr>
                           <td>Developer</td>
                           <td>$
                                <input 
                                    name="dev" 
                                    type="text" 
                                    onChange={props.handleSalaryChange} 
                                    defaultValue={salaryData.dev} 
                                />
                            </td>
                        </tr>
                        <tr>
                           <td>Tester</td>
                           <td>$
                                <input 
                                    name="test" 
                                    type="text" 
                                    onChange={props.handleSalaryChange} 
                                    defaultValue={salaryData.test} 
                                />
                            </td>
                        </tr>
                        <tr>
                           <td>Technical Writer</td>
                           <td>$
                                <input 
                                    name="writer" 
                                    type="text" 
                                    onChange={props.handleSalaryChange} 
                                    defaultValue={salaryData.writer} 
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="role-table">
                <table>
                    <tbody>
                        <tr>
                            <th>Role</th>
                            <th>#</th>
                            <th>Weekly Spend</th>
                            <th>Yearly Spend</th>
                        </tr>
                        <tr>
                           <td>Architects</td>
                           <td>
                               <input 
                                    name="arch" 
                                    type="text" 
                                    onChange={props.handleCountChange} 
                                    defaultValue={countData.arch} 
                                />  
                           </td>
                           <td>${((salaryData.arch * countData.arch)/52).toFixed(0)}</td>
                           <td>${(salaryData.arch * countData.arch)}</td>
                        </tr>
                        <tr>
                           <td>Developers</td>
                           <td>
                               <input 
                                    name="dev" 
                                    type="text" 
                                    onChange={props.handleCountChange} 
                                    defaultValue={countData.dev} 
                                />   
                           </td>
                           <td>${((salaryData.dev * countData.dev)/52).toFixed(0)}</td>
                           <td>${salaryData.dev * countData.dev}</td>
                        </tr>
                        <tr>
                           <td>Testers</td>
                           <td>
                                <input 
                                    name="test" 
                                    type="text" 
                                    onChange={props.handleCountChange} 
                                    defaultValue={countData.test} 
                                /> 
                           </td>
                           <td>${((salaryData.test * countData.test)/52).toFixed(0)}</td>
                           <td>${salaryData.test * countData.test}</td>
                        </tr>
                        <tr>
                           <td>Technical Writers</td>
                           <td>
                                <input 
                                    name="writer" 
                                    type="text" 
                                    onChange={props.handleCountChange} 
                                    defaultValue={countData.writer} 
                                /> 
                           </td>
                           <td>${((salaryData.writer * countData.writer)/52).toFixed(0)}</td>
                           <td>${salaryData.writer * countData.writer}</td>
                        </tr>
                        <tr className="total-row">
                            <td>Total</td>
                            <td>{countData.arch + countData.dev + countData.test + countData.writer}</td>
                            <td>${(((salaryData.arch * countData.arch) + (salaryData.dev * countData.dev) + (salaryData.test * countData.test) + (salaryData.writer * countData.writer))/52).toFixed(0)}</td>
                            <td>${(((salaryData.arch * countData.arch) + (salaryData.dev * countData.dev) + (salaryData.test * countData.test) + (salaryData.writer * countData.writer))).toFixed(0)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Organization;