import './style.scss'

interface Props {
    response?: string;
}

function ResponseWindow({ response }: Props) {
    return (
        <div className="responseWindow">
            { response }
        </div>
    )
}

export default ResponseWindow