import { Container } from "../../shared"
import { useRef, useState } from "react";
const Profile = () => {
    const [text, setText] = useState({
        title: "",
        subtitle: ""

});
    const textareaRef = useRef(null);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setText((prev) => ({
            ...prev,
            [name]: value,
          }));
    
        // Auto-adjust height
        textareaRef.current.style.height = "auto"; // Reset height
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set new height
      };
    return (<section>
        <Container>
            <div className="section-inner py-[100px]">
                <div className="m-[auto] w-[50%] flex justify-center bg-[red]">
                    <textarea 
                    ref={textareaRef}
                    name="title" 
                    placeholder="Story Title" 
                    value={text.title}
                    onChange={handleChange}
                    rows="1"
                    className="w-[100%] resize-none overflow-hidden  px-[10px] text-[45px]">
                    </textarea>
                </div>
                <div className="m-[auto] my-[30px] w-[50%] flex justify-center bg-[red]">
                <textarea 
                    ref={textareaRef}
                    name="subtitle" 
                    placeholder="Story Sutitle" 
                    value={text.subtitle}
                    onChange={handleChange}
                    rows="1"
                    className="w-[100%] resize-none overflow-hidden px-[10px] text-[30px]">
                    </textarea>
                </div>

                {/* <div className="w-[100%] bg-[#ffff]">
                    <div className="w-[100%] border-b-[1px] border-b[rgb(153_153_153)] flex justify-center gap-[20px]">
                        <button className="py-[10px] bg-[transparent] text-[#2E2E2E] px-[10px] border-b-[3px] border-b-[#2E2E2E]">Upload Image</button>
                        <button className="py-[10px] bg-[transparent] text-[#2E2E2E] px-[10px] border-b-[3px] border-b-[#2E2E2E]">Unsplash Image</button>
                    </div>
                    <div></div>
                </div> */}
            </div>
        </Container>
    </section>)
}
export default Profile