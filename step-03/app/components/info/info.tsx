export default function Info(){
    return(
        <div className="h-screen flex justify-evenly">
            <div className="mt-20 h-4/5 bg-blue-200 bg-opacity-50 backdrop-blur-md rounded-lg p-6">
                <h4 className="text-3xl font-bold mb-3">Education:</h4>
                <h6 className="text-2xl underline">ADP (Computer Science):</h6>
                <p>Virtual University of Pakistan<br></br>
                Anticipating</p>
                <br></br>
                <h6 className="text-2xl underline">Governor Sindh Initiative for <br></br>
                    GenAI Web3 and Metaverse:</h6>
                <p>Governor House<br></br>
                Anticipating</p>
                <br></br>
                <h6 className="text-2xl underline">Intermediate:</h6>
                <p>Usman Allah Wala Women's College <br></br>
                Jun 2023</p>
                <br></br>
                <h6 className="text-2xl underline">Matriculation:</h6>
                <p>Usman Allah Wala JPSD Board<br></br>
                Jul 2021</p>
            </div>
            <div className="mt-20 h-4/5 bg-blue-200 bg-opacity-50 backdrop-blur-md rounded-lg p-6">
                <h4 className="text-3xl font-bold mb-3">Skills:</h4>
                <ul className="list-disc">
                    <li>MS Office</li>
                    <li>Typescript</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
        </div>
    )
}
