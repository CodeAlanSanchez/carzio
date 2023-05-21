export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-content">
                <h1 className="contact-heading">
                    CONTACT US
                </h1>
                <hr className="section-separator"/>
                <form action="" className="contact-form">

                    <div className="form-item form-name">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" name="name"/>
                    </div>

                    <div className="form-item form-email">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email"/>
                    </div>

                    <div className="form-item form-body">
                        <label htmlFor="body">Content</label>
                        <textarea id="body" name="body"></textarea>
                    </div>

                    <button className="btn btn-shimmer contact-submit">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;

