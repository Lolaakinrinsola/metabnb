import './Wallet.scss';
import cat from './images/catlogo.png';
import connect from './images/walletConnect.png';
import arrow from './images/arrow.png'
export function Wallet(props){
    return(
        <div className="wallet">
            <div className='walletCard'>
                <div className='walletHeading'>
                    <h4>Connect Wallet</h4>
                    <div className='closeWallet' onClick={props.onclick}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <p className='preferredWallet'>Choose your preferred wallet</p>
                <div className="buttonWallet">
                    <div className='buttonWallet2 catbutton'>
                        <div>
                            <img src={cat} alt="" />
                            <p>Metamask</p>
                        </div>
                        <img src={arrow} alt="" />
                    </div>
                    <div className='buttonWallet2 walletbutton'>
                        <div>
                            <img src={connect} alt="" />
                            <p>WalletConnect</p>
                        </div>
                            <img src={arrow} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}