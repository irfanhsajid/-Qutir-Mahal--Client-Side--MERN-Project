import React, { useState } from 'react';
import swal from 'sweetalert';
const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
        e.target.value = '';

    }
    const handleAdminSubmit = (e) => {
        const user = { email };
        e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "Once submitted, this user will be successsfully set as admin!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! This user is set as an ADMIN!", {
                        icon: "success",
                    });
                    fetch('https://hidden-citadel-95408.herokuapp.com/users/admin', {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                        })

                } else {
                    swal("Operation Unchanged!");
                }
            });
    }
    return (
        <div className="text-center">
            <h2>Make a new user Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input onBlur={handleOnBlur} className="p-2 border-1 border-bottom border-primary w-50" type="email" name="email" id="" placeholder="Enter Admin Email" /> <br />
                <input className="m-2 btn btn-primary" type="submit" value="Make Admin" />
            </form>
        </div>
    );
};

export default MakeAdmin;