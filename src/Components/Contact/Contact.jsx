
export default function Contact() {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-around m-5 ">
            <div>
                <img style={{ width: "400px ", height: "250px" }} src="https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="text-center w-50">
                <h1>Contact</h1>

                <form className="m-5">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="" id="name" />
                    <br />

                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="" id="email" />
                    <br />

                    <div className=""><label htmlFor="floatingTextarea">Your Message</label>
                        <textarea className="form-control" placeholder="Leave a message here" id="floatingTextarea"></textarea>

                    </div>
                    <br />

                    <button className="btn btn-success">Submit</button>
                </form>

            </div>

        </div>
    )
}