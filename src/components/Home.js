import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

import close from '../assets/close.svg';

const Home = ({ home, provider, escrow, togglePop }) => {

    return (
        <div className="home">
            <div className='home__details'>
                <div className="home__image">
                    <img src={home.image} alt="Home" />
                </div>

                <div className="home__overview">
                    <h1>{home.name}</h1>
                    <p>
                        <strong>{home.attributes[2].value}</strong> bds |
                        <strong>{home.attributes[3].value}</strong> ba |
                        <strong>{home.attributes[4].value}</strong> adf |
                    </p>
                    <p>{home.address}</p>
                    <h2>{home.attributes[0].value} ETH</h2>
                    <div>
                        <button className='home__buy'
                                // onClick={buyHandler}
                                // disabled={hasBought}
                        >
                            Buy
                        </button>
                        <button className='home__contact'>
                            Contact Agent
                        </button>

                        <hr />

                        <h2>Overview</h2>

                        <p>
                            {home.description}
                        </p>

                        <hr />

                        <h2>Facts and Features</h2>

                        <ul>
                            {home.attributes.map((attribute, index) => (
                                <li key={index}>
                                    <strong>{attribute.trait_type}</strong> : {attribute.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <button onClick={togglePop} className="home__close">
                    <img src={close} alt="Close" />
                </button>
            </div>
        </div>
    );
}

export default Home;
