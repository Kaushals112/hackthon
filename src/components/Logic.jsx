
import { useState } from 'react';
import Self from './Self';
import Other from './Other';
import { useProductContext } from '../context/datacontext';
import Single from './Single';
import Translate from './Translate';
import { UTF8_GENERAL_MYSQL500_CI } from 'mysql/lib/protocol/constants/charsets';
const { Configuration, OpenAIApi } = require("openai");

function Logic() {
    const [notes, setNote] = useState("");

    const [reply, setreply] = useState([{
        req: "",
        res: "",
    }])
    const [out, setout] = useState("");
    const { note } = useProductContext();
    // const [ai, setai] = useState("");
    const [language,setlanguage]=useState("Hindi");
    console.log(note);


    const arr = {
        copywrite: "write a copywrite for following product",
        translate: "Translate this into",/* then add language*/
        summary: "Summarize this ",
        grammar: "Correct this to standard English:",
        Ques: "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with Sorry , I Don't Know.                         Q.",
        chatbot: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nhello Hi there! What can I help you with?I'm happy to help! Feel free to ask me any questions you may have.",

    }
    const HandleSubmit = async (event) => {

        const content = notes;
        event.preventDefault();
        console.log(content);
        setreply((p) => {
            return [...p, { req: content }]
        })

        const configuration = new Configuration({
            apiKey: "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",
        });
        const openai = new OpenAIApi(configuration);
        let ai=""
      if(note==="trans")
        {
            ai=arr.translate +language
        }
        if(note==="product")
        {
            ai=arr.copywrite
        }
        if(note==="chatbot")
        {
            ai=arr.chatbot
        }

        const res = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${ai} : ${content}`,
            temperature: 0.8,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        const output = res.data.choices[0].text
        if (output !== "") {
            setout(output);

            setreply((p) => {
                return [...p, { res: output }]
            })


        }
        console.log(output);




    }

    function HandleChange(event) {
        const { value } = event.target;
        setNote(value)
       console.log("this is notes" + notes);
        return;
    }
    function HandleLanguage(event) {
        const { value } = event.target;
        setlanguage(value)
       console.log("this is language" + language);
        return;
    }
    if (note === "chatbot" + "qna") {
        return (<div>

            <div>


                <ol className="chat">
                    {reply.map((current, index) => {

                        return (<div>
                            <Self key={index} request={current.req} />
                            <Other key={index + 3} response={current.res} />
                        </div>)

                    })}

                </ol>
                <form action='#' onSubmit={HandleSubmit}>
                    <input className="textarea" type="text" placeholder="Type here!" onChange={HandleChange} />
                </form><div className="emojis"></div>
            </div>
        </div>
        )
    }

    if (note === "trans") {
        return (<Translate
            img="./head.jpeg"
            description="Generate Product Description"
            text="Which Product Would you like to get a description for?"
            submit={HandleSubmit}
            change={HandleChange}
            response={out}
            changes={HandleLanguage}
        />)
    }
    if (note === "product" || note==="copy") {
        return (<Single
            img="./head.jpeg"
            description="Generate Product Description"
            text="Which Product Would you like to get a description for?"
            submit={HandleSubmit}
            change={HandleChange}
            response={out}
        />)
    }
}
export default Logic;






