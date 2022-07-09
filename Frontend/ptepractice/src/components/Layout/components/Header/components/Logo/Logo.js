import {ReactComponent as Pte} from './logo.svg'
function Logo({className}) {
    return ( 
        <span
            className={className}
        >
            <Pte className='
                w-[100%]
                h-[100%]
            '/>
        </span>

     );
}

export default Logo;