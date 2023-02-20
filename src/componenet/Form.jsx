import './FormStayle.css';
import React,{useRef} from 'react'


export const Form = () => {
     const name = useRef(null);
     const email = useRef(null);
     const subject = useRef(null);
     const massege = useRef(null);

     const sendEmail = (e) => {
          e.preventDefault();
          name.current.value = '';
          email.current.value = '';
          subject.current.value = '';
          massege.current.value = '';
          alert('Massege Send');
        }
     return (
          <>
               <div className="contact-form">
                    <form onSubmit={sendEmail}>
                         <ul className="mx-auto">
                              <li className="half m-2">
                                   <input className="in-N" ref={name} type="text" name='name' placeholder="Name" required />
                              </li>
                              <li className="half m-2">
                                   <input className='in-e' ref={email} type='email' name='email' placeholder="Email" required />
                              </li>
                              <li className=" m-2">
                                   <input className='in-s' ref={subject} type="text" placeholder="Subject" name="Subject" required />

                              </li>

                              <li className="m-2">
                                   <textarea ref={massege} name="massege" placeholder='Massege' required ></textarea>
                              </li>

                              <li>
                                   <input type="submit" className='flat-button' value='SEND' />
                              </li>
                         </ul>
                    </form>
               </div>

          </>
     )
}
