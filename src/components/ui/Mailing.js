import React from 'react'

export const Mailing = () => {

    return (
        <section className="mailing">
            <div className="container-small center">
                <h2 className="white center mt-4 mb-2">Lets Grow<span className="secondary">.</span></h2>
                <p className="white mb-2">It is a long established fact that a reader will be distracted by the readable content of a page. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>

                <form>
                    <input 
                        type="text"
                        className="input-mailing"
                    />
                    <button
                    className="btn-mailing"
                    >Send</button>
                </form>
            </div>
        </section>
    )
}
