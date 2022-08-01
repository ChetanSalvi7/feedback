import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';


const FormIn = () => {

    const form = useRef();
 
    const [data, setData] = useState({
        your_name: '',
        your_email:'',
        review_name: '',
        performance: '',
        skills: '',
        quality: '',
        initiative: '',
        reliability: '',
        punctuality: '',
        communication: '',
        work_on: '',
        done_well:'',
    })
    const onChange = e => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const BTHOME = () =>{
        window.location.reload();
    }
    

    const Next = () => {
        const ques1 = document.getElementById('box-1');
        const ques2 = document.getElementById('box-2');
        const ques3 = document.getElementById('box-3');
        const ques4 = document.getElementById('box-4');
        const ques5 = document.getElementById('box-5');
        const ques6 = document.getElementById('box-6');
        const ques7 = document.getElementById('box-7');
        if (ques1.style.display === "") {
            ques1.style.display = "none";
            ques2.style.display = "block";
        } else if (ques2.style.display === "block") {
            ques2.style.display = "none";
            ques3.style.display = "block";
        } else if (ques3.style.display === "block") {
            ques3.style.display = "none";
            ques4.style.display = "block";
        } else if (ques4.style.display === "block"){
            ques4.style.display = "none";
            ques5.style.display = "block";
        } else if (ques5.style.display === "block"){
            ques5.style.display = "none";
            ques6.style.display = "block";
        }else if (ques6.style.display === "block"){
            ques6.style.display = "none";
            ques7.style.display = "block";
        }
    }
    const submitButton = (e) => {
        e.preventDefault();
        Next();
       console.log("Design & Developed by Chetan");
       
        emailjs.sendForm('service_55paycr', 'template_rwabcdk', e.target, '2aAwYD2YOjYtTQZqv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
        <>
            <form  ref={form} onSubmit={submitButton}>
                <div className="form-box" id='box-1'>
                    <div className="questions">
                        1 &#8594; Hi there, what's your name & email?
                    </div>
                    <div className="input-field">
                        <input type="text" className='input-text' name='your_name' value={data.your_name} onChange={onChange} placeholder='Type your name here...' autoComplete='off' />
                    </div>
                    <br/>
                    <div className="input-field">
                        <input type="email" className='input-text' name='your_email' value={data.your_email} onChange={onChange} placeholder='Your Email here...' autoComplete='off' />
                    </div>
                    
                    <button type='button' className="btn-submit left-btn" onClick={Next}>OK &#10003;</button>
                </div>
                <div className="form-box" id='box-2'>
                    <div className="questions">
                        2 &#8594; And who are you reviewing today?
                    </div>
                    <div className="input-field">
                        <input type="text" className='input-text' name='review_name' value={data.review_name} onChange={onChange} placeholder='Type your answer here...' autoComplete='off' />
                    </div>
                    <button className="btn-submit left-btn" type='button' onClick={Next}>OK &#10003;</button>
                </div>
                <div className="form-box" id='box-3'>
                    <div className="questions">
                        3 &#8594; How would you rate____'s overall job performance?
                    </div>
                    <div className="input-radio" onChange={onChange} >
                        <label htmlFor="excellent" className="radio-box  ">
                            <input type="radio" className='super-happy' name="performance" value="excellent" id='excellent' />
                            <div className="radios-1 radios">5/5 Excellent</div>
                        </label>
                        <label htmlFor="good" className="radio-box ">
                            <input type="radio" className='happy' name="performance" value="good" id='good' />
                            <div className="radios-2 radios">4/5 Good</div>
                        </label>
                        <label htmlFor="room_for_improvement" className="radio-box ">
                            <input type="radio" className='neutral' name="performance" value="room_for_improvement" id='room_for_improvement' />
                            <div className="radios-3 radios">3/5 Room for improvement </div>
                        </label>
                        <label htmlFor="not_good" className="radio-box ">
                            <input type="radio" className='sad' name="performance" value="not_good" id='not_good' />
                            <div className="radios-4 radios">2/5 Not good</div>
                        </label>
                        <label htmlFor="very_poor" className="radio-box">
                            <input type="radio" className='super-sad' name="performance" value="very_poor" id='very_poor' />
                            <div className="radios-5 radios">1/5 Very poor</div>
                        </label>
                    </div>
                    <button className="btn-submit left-btn" type='button' onClick={Next}>OK &#10003;</button>
                </div>
                <div className="form-box" id='box-4'>
                    <div className="questions">
                        4 &#8594; Please rate the follwing areas :
                    </div>
                    <div className="area4" style={{marginTop:"40px"}}>
                        <div className="area-ques "></div>
                        <div className="area-in ">
                            <p className="area-text">1/5</p>
                            <p className="area-text">2/5</p>
                            <p className="area-text">3/5</p>
                            <p className="area-text">4/5</p>
                            <p className="area-text">5/5</p>
                        </div>
                    </div>
                    <div className="area4">
                        <div className="area-ques ">Role-specific skills</div>
                        <div className="area-in " onChange={onChange}>
                            <label htmlFor='skill-1' className="area-text-1">
                                <input type="radio" name="skills" id="skill-1" value="skill-1"/><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='skill-2' className="area-text-1">
                                <input type="radio" name="skills" id="skill-2" value="skill-2" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='skill-3' className="area-text-1">
                                <input type="radio" name="skills" id="skill-3" value="skill-3" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='skill-4' className="area-text-1">
                                <input type="radio" name="skills" id="skill-4" value="skill-4" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='skill-5' className="area-text-1">
                                <input type="radio" name="skills" id="skill-5"  value="skill-5"/><span className="blank-radio"></span>
                            </label>
                        </div>

                    </div>
                    <div className="area4">
                        <div className="area-ques ">Quality of output</div>
                        <div className="area-in " onChange={onChange}>
                            <label htmlFor='quality-1' className="area-text-1"><input type="radio" name="quality" id="quality-1" value="quality-1" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='quality-2' className="area-text-1"><input type="radio" name="quality" id="quality-2" value="quality-2" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='quality-3' className="area-text-1"><input type="radio" name="quality" id="quality-3" value="quality-3" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='quality-4' className="area-text-1"><input type="radio" name="quality" id="quality-4" value="quality-4" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='quality-5' className="area-text-1"><input type="radio" name="quality" id="quality-5" value="quality-5" /><span className="blank-radio"></span>
                            </label>
                        </div>
                    </div>
                    <div className="area4">
                        <div className="area-ques " >Initiative</div>
                        <div className="area-in "onChange={onChange}>
                            <label htmlFor='initiative-1' className="area-text-1"><input type="radio" name="initiative" id="initiative-1" value="initiative-1" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='initiative-2' className="area-text-1"><input type="radio" name="initiative" id="initiative-2" value="initiative-2" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='initiative-3' className="area-text-1"><input type="radio" name="initiative" id="initiative-3" value="initiative-3" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='initiative-4' className="area-text-1"><input type="radio" name="initiative" id="initiative-4" value="initiative-4" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='initiative-5' className="area-text-1"><input type="radio" name="initiative" id="initiative-5" value="initiative-5" /><span className="blank-radio"></span>
                            </label>
                        </div>
                    </div>
                    <div className="area4">
                        <div className="area-ques ">Reliability</div>
                        <div className="area-in " onChange={onChange}>

                            <label htmlFor='reliability-1' className="area-text-1"><input type="radio" name="reliability" id="reliability-1" value="reliability-1" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='reliability-2' className="area-text-1"><input type="radio" name="reliability" id="reliability-2" value="reliability-2" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='reliability-3' className="area-text-1"><input type="radio" name="reliability" id="reliability-3" value="reliability-3" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='reliability-4' className="area-text-1"><input type="radio" name="reliability" id="reliability-4" value="reliability-4" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='reliability-5' className="area-text-1"><input type="radio" name="reliability" id="reliability-5" value="reliability-5" /><span className="blank-radio"></span>
                            </label>
                        </div>
                    </div>
                    <div className="area4">
                        <div className="area-ques " >Punctuality and attendance</div>
                        <div className="area-in "onChange={onChange}>
                            <label htmlFor='punctuality-1' className="area-text-1"><input type="radio" name="punctuality" id="punctuality-1" value="punctuality-1" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='punctuality-2' className="area-text-1"><input type="radio" name="punctuality" id="punctuality-2" value="punctuality-2" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='punctuality-3' className="area-text-1"><input type="radio" name="punctuality" id="punctuality-3" value="punctuality-3" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='punctuality-4' className="area-text-1"><input type="radio" name="punctuality" id="punctuality-4" value="punctuality-4" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='punctuality-5' className="area-text-1"><input type="radio" name="punctuality" id="punctuality-5" value="punctuality-5" /><span className="blank-radio"></span>
                            </label>
                        </div>
                    </div>
                    <div className="area4">
                        <div className="area-ques " >Communication</div>
                        <div className="area-in "onChange={onChange}>
                            <label htmlFor='communication-1' className="area-text-1"><input type="radio" name="communication" id="communication-1" value="communication-1" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='communication-2' className="area-text-1"><input type="radio" name="communication" id="communication-2" value="communication-2" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='communication-3' className="area-text-1"><input type="radio" name="communication" id="communication-3" value="communication-3" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='communication-4' className="area-text-1"><input type="radio" name="communication" id="communication-4" value="communication-4" /><span className="blank-radio"></span>
                            </label>
                            <label htmlFor='communication-5' className="area-text-1"><input type="radio" name="communication" id="communication-5" value="communication-5" /><span className="blank-radio"></span>
                            </label>
                        </div>
                    </div>
                    <button className="btn-submit left-btn" type='button' onClick={Next}>OK &#10003;</button>
                </div>
                <div className="form-box" id='box-5'>
                    <div className="questions">
                        5 &#8594; What does____need to work on?
                    </div>
                    <div className="input-field">
                        <textarea className='input-text input-textarea' name='work_on' value={data.work_on} onChange={onChange} placeholder='Type your answer here...' autoComplete='off' />
                    </div>
                    <button type='button' className="btn-submit left-btn" onClick={Next}>OK &#10003;</button>
                </div>
                <div className="form-box" id='box-6'>
                    <div className="questions">
                        6 &#8594; Is there anything i've done particularly well in ?
                    </div>
                    <div className="input-field">
                        <textarea className='input-text input-textarea' name='done_well' value={data.done_well} onChange={onChange} placeholder='Type your answer here...' autoComplete='off' />
                    </div>
                    <button type='submit' className="css-button-sliding-to-left--green left-btn" >Submit</button>
                </div>
                <div className="form-box" id='box-7'>
                    <div className="questions" style={{textAlign:"center"}}>
                    <div className='right-logo'> &#10003;</div>
                        Thanks for completing the feedback form. <br />
                        <button type='button' className="btn-submit left-btn" onClick={BTHOME}>Back To Home &#10003;</button>
                    </div>
                    
                </div>
            </form>
        </>
    )
}

export default FormIn