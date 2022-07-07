import {ReactComponent as Pte} from './logo.svg'
function Logo({className}) {
    return ( 
        <span
            className={className}
        >
            <Pte className='
                w-[120px]
            '/>
        </span>

     );
}

export default Logo;