import React from 'react'
import Card from '../card/card'
import '../card/card.css'

const Modal = ({profilePic, name, description, id}) => {
  return (
    
    <div>
        {/* Button trigger modal  */}
        <button type="button" className=" profileBtn" data-bs-toggle="modal" data-bs-target={`#modal${id}`}>
                    Click to view profile
        </button>

        {/* Modal  */}
        <div class="modal fade" id={`modal${id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Card ID</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <img className="img-responsive profilePic" 
                            src={profilePic}
                            alt="profile pic" />
                        </div>
                        <div className="descr">
                            <p className="name"> {name}</p>
                            {/* <button className="profileBtn"> Click to view profile</button> */}
                            <ul className="name"> 
                                <li>{description[0]}</li>
                                <li>{description[1]}</li>
                                <li>{description[2]}</li>
                             </ul>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal
