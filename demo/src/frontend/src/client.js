import fetch from 'unfetch'

const checkStatus  = response =>  {
    if(response.ok) {
        return response;
    }
    // convert non-2xx HTP response into errors
    const error  = new Error(response.statusText);
    error.response =  response;
    return Promise.reject(error);
}

export const getAllStudents = () =>
    fetch("api/v1/students")
        .then(checkStatus);


export const addNewStudents = (student) =>
    fetch("api/v1/students", {
        headers: {
            'Content-Type':'application/json'
        },
        method: 'POST',
        body:JSON.stringify(student)
    }).then(checkStatus);

export const deleteStudents = (studentId=5000) =>
    fetch("api/v1/students" + "/" + studentId,{
        headers: {
            'Content-Type':'application/json'
        },
        method: 'DELETE',
    }).then(checkStatus);
