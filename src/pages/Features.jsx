import "../styles/features.css";

import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Features = () => {
  const locationHash = useLocation().hash;

  useEffect(() => {
    if (locationHash) {
      setTimeout(function () {
        window.location.hash = "";
        window.location.hash = locationHash;
      }, 300);
    }
  }, [locationHash]);

  return (
    <React.Fragment>
      <div className="page-left-menu">
        <div className="page-title">Features</div>
        <div className="page-nav-content">
          <a href="#3drecognition">
            <div
              className={
                locationHash.includes("3drecognition")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              The Object Recognition
              <div className="page-nav-circle"></div>
              <div className="page-nav-line object-line"></div>
            </div>
          </a>
          <a href="#3drecognition-hash-id">
            <div className="page-nav-inside">
              Hash ID
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#object-categories">
            <div className="page-nav-inside">
              The Object Categories
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#multiobject">
            <div
              className={
                locationHash.includes("multiobject")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Multi-Object Option
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#scanproof">
            <div
              className={
                locationHash.includes("scanproof")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Proof of Scan Protocol
              <div className="page-nav-circle"></div>
              <div className="page-nav-line scanproof-line"></div>
            </div>
          </a>
          <a href="#scanproof-block-production">
            <div className="page-nav-inside">
              PoW ASIC-resistant
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#scanproof-deterministic">
            <div className="page-nav-inside">
            PoA deterministic blockchain finality
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#network-structure">
            <div className="page-nav-inside">
              P2P network structure
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#ledger">
            <div
              className={
                locationHash.includes("ledger")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              The Ledger of Things
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#3dprc-2">
            <div
              className={
                locationHash.includes("3dprc-2")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              3DPRC-2 standard
              <div className="page-nav-circle"></div>
              <div className="page-nav-line rc-line"></div>
            </div>
          </a>
          <a href="#3dprc-2-overview">
            <div className="page-nav-inside">
              Overview
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#3dprc-2-implementation">
            <div className="page-nav-inside">
              Implementation
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#3dprc-2-assets">
            <div className="page-nav-inside">
              Fungible and Non-fungible backed assets
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#3dprc-2-asset-management">
            <div className="page-nav-inside">
              Asset management
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#fungibleassets">
            <div
              className={
                locationHash.includes("fungibleassets")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Fungible assets
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#smartcontracts">
            <div
              className={
                locationHash.includes("smartcontracts")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Smart Contracts
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#atomicswap">
            <div
              className={
                locationHash.includes("atomicswap")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Atomic Swap
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#dex">
            <div
              className={
                locationHash.includes("dex")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Embedded DEX
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#passwords">
            <div
              className={
                locationHash.includes("passwords")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Password and Keys Creation
              <div className="page-nav-circle"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-block first-page-block" id="3drecognition">
          <div className="page-content-inner">
            <div className="page-content-title">The Object Recognition</div>
            <div className="page-content-text">
               The foundation of 3Dpass is built upon object recognition <Link to="https://github.com/3dpass">open-source</Link> {" "} 
               technology, a structured collection of research-based algorithms developed by either the founders 
               or community members. These algorithms are specifically tailored to function within 
               the blockchain environment, where traditional feedback mechanisms for comparing objects 
               during processing are absent. This limitation stems from the decentralized nature 
               of blockchain architecture, where nodes, administered by mutually untrusting users, 
               do not provide inherent trust.
              </div>
              <div className="page-content-text">
              Therefore, any verification of objects, events, or transactions must rely on offline 
              mathematical calculations for proof. The initial algorithm, <Link to="/grid2d">Grid2d</Link>,{" "}
              <Link to="/https://michael25651209.medium.com/how-to-calculate-a-hash-of-3d-object-1e0e3669322d">introduced</Link> by 
              Michael Co in 2020, focuses on 3D object shape recognition. However, the applications 
              of 3Dpass extend far beyond this initial scope. The implementation of these algorithms 
              is accessible as the <Link to="https://github.com/3Dpass/pass3d">pass3d</Link> recognition 
              toolkit, playing a crucial role in the <Link to="#scanproof">Proof of Scan</Link> consensus protocol within {" "}
               <Link to="/features#ledger">The Ledger of Things</Link> blockchain.
              </div>
            <div className="page-content-subtitle" id="3drecognition-hash-id">
              Hash ID
            </div>
            <ul className="page-content-text">
              <li>
                The <Link to="/pass3d">pass3d</Link> recognition toolkit captures unique characteristics of 
                an object to generate its digital identity, referred to as a <Link to="/features#3drecognition-hash-id">HASH ID</Link>. 
                This HASH ID remains consistent for every scan of the same object, enabling a direct and 
                immutable link between the physical object and its digital representation. This capability surpasses traditional 
                NFTs (Non-Fungible Tokens), which lack the ability to maintain such a stable correspondence. {" "}
                <a href="#difference">Learn the difference</a>.
              </li>
              <li>
                The HASH ID ensures a high level of privacy by containing "zero knowledge" about the object itself. 
                The original data <i>(seed)</i> is safeguarded using the cryptographic standard {" "}
                <Link to="https://en.wikipedia.org/wiki/SHA-2">SHA-256</Link>.
              </li>
              <li>
                The HASH ID enables precise delineation of property rights, discerning original assets from counterfeits 
                with the margin of recognition error. This capability protects against unauthorized duplication.
              </li>
            </ul>
            <img
              className="page-img"
              src="/images/slide2_phone1.png"
              alt="img"
            />
            <a className="message-text" href="/mobile-wallet#download">
            <div className="page-lead-content">
              Mobile Wallet
                <div className="page-lead-button">Download</div>
            </div>
            </a>
            <div className="page-content-subtitle" id="object-categories">
              The Object Categories
            </div>
            <div className="page-content-text">
              3DPass aims to inspire developers to enhance the <Link to="https://github.com/3Dpass/pass3d">pass3d</Link> open-source toolkit with innovative 
              recognition algorithms, thereby enhancing its practical utility for users. To streamline 
              this effort, we've organized the challenge into a structured format that machines can 
              easily comprehend as input. Discover more about{" "}
             <Link to="/proof-of-scan#object">the algorithm requirements</Link> to contribute effectively.
            </div>
            <div className="page-content-text">
            It's evident that comparing HASH IDs from objects processed with different recognition 
            algorithms or parameters doesn't yield meaningful results. However, comparing 
            HASH IDs is crucial to ensure users that duplicates are absent in the blockchain database.
            </div>
            <div className="page-content-text">
            Through categorizing object types, we establish "standard" algorithms (presets) available 
            for each category. Each preset defines the level of precision at which objects within that 
            category are recognized. To delve deeper, explore the implementation of the {" "}
            <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">3DPRC-2</Link> tokenization standard.
            </div>
            <div className="page-content-text">
              Initial list of categories is presented as follows:
            </div>
            <ul className="page-content-text">
              <li>3D objects
              <ul className="page-content-text">
                <li>
                  Algo: <code>grid2d_v3a -s 12 -g 8</code> (learn more about <Link to="/grid2d">Grid2d</Link>)
                </li>
              </ul>
              </li>
              <li>2D drawings</li>
              <li>Music</li>
              <li>Biometrics</li>
              <li>Radio signals</li>
              <li>Movements</li>
              <li>Texts</li>
            </ul>
            <div className="page-content-text">
              Feel free to implement or suggest new algorithm for any category above and jump right
              in <Link to="//grants#dev-bounty">3DPass contribution grant program</Link>
            </div>
          </div>
        </div>
        <div className="page-content-block" id="multiobject">
          <div className="page-content-inner">
            <div className="page-content-title">Multi-Object Option</div>
            <div className="page-content-text">
            Not only can a single object be used to create its <Link to="/features#3drecognition-hash-id">HASH ID</Link>, {" "}
            but a combination of several objects is also possible. For instance, the shape of an object could be combined with 
            additional properties such as size, weight, density, clarity, owner's biometric data, 
            and more. Alternatively, a diverse selection of differently shaped 3D objects could be 
            chosen. This complex HASH ID, derived from multiple seeds, enhances security against 
            attacks through <Link to="https://en.wikipedia.org/wiki/Multi-factor_authentication">multi-factor authentication</Link>. {" "}
            Moreover, it allows capturing various inherent properties of the object. Consider the following examples:
            </div>
            <ul className="page-content-text">
              <li>Piece of rock + Owner's fingerprint - HASH-ID 1</li>
              <li>3D object shape + Its weight - Hash-ID 2</li>
              <li>Object_1 shape + Object_2 shape - Hash-ID 3</li>
            </ul>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/multiseed1.png"
              alt="img"
            />
            <div className="page-content-text">In the example above:</div>
            <ul className="page-content-text">
              <li>3D Object is <i>"something that you have"</i> factor</li>
              <li>Fingerprint is <i>"something that you are"</i> factor</li>
              <li>
                PIN code or password or special movement or what so ever might
                be added as "something that you know" factor as well.
              </li>
            </ul>
          </div>
        </div>
        <div className="page-content-block" id="scanproof">
          <div className="page-content-inner">
            <div className="page-content-title">Proof Of Scan Protocol</div>
            <div className="page-content-text">
            <Link to="/proof-of-scan">Proof of Scan</Link> represents a groundbreaking decentralized 
            protocol utilized not only as the consensus mechanism for The Ledger of Things blockchain network but 
            also designed to prevent the duplication of digital assets. These assets encompass a wide 
            array of tokenized objects, including 3D objects, 2D drawings, melodies, voices, radio signals, 
            and more. Leveraging advanced recognition technology, this innovative approach unlocks access 
            to potential trillions in transactions worldwide.
            </div>
            <div className="page-content-text">
              "One object = One asset" rule
            </div>
            <div className="page-content-text">
            The primary and foundational rule of <Link to="/proof-of-scan">Proof of Scan</Link> (PoScan) 
            asserts "1 object = 1 asset," emphasizing the use of recognition algorithms instead of traditional 
            hash functions like <Link to="https://en.wikipedia.org/wiki/SHA-2">SHA256</Link>. 
            Specifically, the <Link to="/grid2d">Grid2d</Link> algorithm is employed for 3D object 
            recognition within the Ledger of Things ecosystem.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/oneobject_oneasset1.png"
              alt="img"
            />
            <div
              className="page-content-subtitle"
              id="scanproof-block-production"
            >
              PoW component: CPU oriented, ASIC-resistant
            </div>
            <div className="page-content-text">
              The 3Dpass <i>Proof of Work</i> (PoW) component is designed to resist ASIC/FPGA devices, ensuring a high level of mining distribution,
              which plays an essential role in the <Link to="/proof-of-scan#3dprc-2">3DPRC-2</Link> {" "}
              tokenizaton standard. Leveraging 3D object shape as <i>nonce</i> {" "}
              makes <Link to="/proof-of-scan">Proof of Scan</Link> unique and stand out from any other PoW around the cryptospace.{" "}
              In order to find new block miners are picking up a unique-shaped 3D object, the <Link to="/features#3drecognition-hash-id">HASH ID</Link> of which {" "}
              would make <Link to="/grid2d">Grid2d</Link> recognition algorithm produce a specific output sealing the block on top of Best chain. {" "}
              The objects found are available to observe over the <Link to="https://wallet.3dpass.org">web wallet</Link>.  
              See more detail on <Link to="/proof-of-scan#new-block">PoW task</Link>. Learn <Link to="/mainnet">how to mine 3Dpass coin</Link>.
            </div>
            <div className="page-content-subtitle" id="scanproof-deterministic">
              PoA component: Deterministic Blockchain Finality
            </div>
            <div className="page-content-text">
              The <Link to="/proof-of-scan">Proof of Scan</Link> implementation is equipped {" "}
              with <Link to="/proof-of-scan#granpda">GRANDPA</Link> finality {" "}
              gadget, which guarantees for Best chain to reach finality in
              oppose to the probabilistic finality (e.x. Nakamoto protocol which
              first was applied in Bitcoin). PoA <i>(Proof of Authority)</i> concept is {" "}
              being used. There is an Authority set called Validators consisting of the most 
              reliable nodes selected by the algorithm. They vote upon Best chain 
              to ensure there is no way for it to get reorganized afterwards. This will determine the preservation {" "}
              of all the user assets and will make them available for transfer all the way trough {" "}
              the lifetime. Learn <Link to="/mainnet#validator">how to become  Validator</Link> {" "} 
              in The Ledger of Things.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/best_chain_structure.png"
              alt="img"
            />
            <div className="page-content-text">
              Follow <Link to="/proof-of-scan">full protocol description</Link>{" "}
               or the <Link to="/coin#white-papper">White paper</Link> to dive into detail.
            </div>
            <div
              className="page-content-subtitle"
              id="network-structure"
            >
              P2P network structure
            </div>
            <div className="page-content-text">
              The network structure is presented as two layers of equal nodes leveraging the same recognition 
              toolkit, which is upgradable online.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/p2p_network_structure.png"
              alt="img"
            />
          </div>
        </div>
        <div className="page-content-block" id="ledger">
          <div className="page-content-inner">
            <div className="page-content-title">
              The Ledger Of Things
            </div>
            <div className="page-content-text">
            The Ledger of Things is Layer 1 blockchain and decentralized storage providing its instruments and tools 
            for the tokenizaton of objects. The <Link to="https://github.com/3Dpass/3DP">Nodes</Link> are equipped with 
            recognition toolkit and will prevent assets form beeing copied, even if its file was slightly changed 
            (ex. with one dot, pixel or one byte). At minimum, it allows to establish and track 1:1 correspondence between 
            the object and its digital asset. At max - to develop endless of useful smart contracts and dApps operating within 
            the eco-system and exploiting the <Link to="/features#3drecognition-hash-id">HASH ID</Link> feature as an idea 
            of authentication of real world assets (or virtual objects) all across the Internet.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/the_tokenization_of_the_object_share.png"
              alt="img"
            />
            <div className="page-content-text">Useful Links: </div>
            <ul className="page-content-text">
              <li>
                <Link to="/proof-of-scan">Proof of Scan</Link> consensus protocol description
              </li>
              <li>
                <Link to="https://github.com/3Dpass/3DP">The Ledger of Things NODE</Link>
              </li>
              <li>
                <Link to="https://github.com/3Dpass/3DP/wiki">Development Wiki</Link>
              </li>
              <li>
                <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API">3DPRC-2 tokenization API</Link>
              </li>
              <li>
                <Link to="https://telemetry.3dpscan.io/">
                  Network telemetry server
                </Link>
              </li>
              <li>
                <Link to="https://3dpscan.io/">Block explorer</Link>
              </li>
              <li>
                <Link to="https://explorer-api.3dpscan.io/graphql/">
                  Block data graphql API
                </Link>
              </li>
              <li>
                <Link to="https://wallet.3dpass.org/">3Dpass Web3 wallet</Link>{" "}
                |{" "}
                <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc2.3dpass.org&types=eNqrVnJMTs4vzSvxzEvLV7JC5oVnlmS4lCbmBKWmOYPElHSUHFNSilKLi5HUpQBFffLzs0sLgvNLi5JT0aTCUzPTM0qAgqXGRkq1AEo%2FJWY%3D">
                  polkadot js wallet
                </Link>
              </li>
              <li>
                <Link to="/mainnet#mining-pool">How to start mining</Link>
              </li>
              <li>
                <Link to="/mainnet#validator">How to become Validator</Link>
              </li>
              <li>
                <Link to="/features#smartcontracts">Smart contracts</Link> trait
                leveraging <Link to="https://use.ink/">ink</Link>, a Rust-based
                embedded domain specific language (eDSL) for writing WebAssembly
                smart contracts.
              </li>
              <li>
                <Link to="/governance">Governance</Link> and{" "}
                <Link to="/forkless-upgrade">forkless upgrade</Link>,{" "}
                <Link to="/mainnet#chain">On-chain Identity</Link>
              </li>
              <li>
                <Link to="https://substrate.io">Substrate</Link>-based and
                scalable solution: IPFS storage,{" "}
                <Link to="/features#smartcontracts">Smart contracts</Link>, etc.
                Learn more about{" "}
                <Link to="/features#integration">
                  3Dpass network NODE integration.
                </Link>
              </li>
            </ul>
            <a className="message-text" href="/mainnet">
            <div className="page-lead-content">
              Mainnet
                <div className="page-lead-button">Join the Network</div>
            </div>
            </a>
          </div>
        </div>
        <div className="page-content-block" id="3dprc-2">
          <div className="page-content-inner">
          <div className="page-content-title">3DPRC-2 the object tokenizaton standard</div>
          <div
              className="page-content-subtitle"
              id="3dprc-2-overview"
            >
              Overview
            </div>
            <div className="page-content-text">
              <Link to="/proof-of-scan#3dprc-2">3DPRC-2</Link> (3Dpass Request for Comments), <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">proposed</Link> by PaulS in September 2023, 
              is a standard p2p protocol for the tokenization of the user objects operating within “The Ledger of Things”. Its implementation represents
               one of the most useful aspects of "Proof of Scan" consensus, which opens the capability 
               for the network to provide the tokenization service to customer. 
            </div>
            <div className="page-content-text" id="difference">
              Learn the difference between the revolutionary 3DPRC-2 tokenizaton standard based on the object recognition
              {" "}
               and conventional ERC-721 for NFT using just an account signature:
            </div>
            <video
              src="/images/3DPRC-2.mp4"
              className="page-video"
              controls
            ></video>
            <Link className="message-text" to="/assets#object-authentication">
            <div className="page-lead-content">
               Put your object on The Ledger of Things
                <div className="page-lead-button">Put the object</div>
            </div>
            </Link>
            <div className="page-content-subtitle" id="3dprc-2-implementation">
              3DPRC-2 implementation:
            </div>
            <ul className="page-content-text">
              <li>
                <strong>
                  Advanced version of <Link to="/proof-of-scan">Proof of Scan</Link>
                </strong>
                - The protocol is weaved into “The Ledger of Things” PoW component in a way to tackle the user 
                objects authentication along with the ones being mined. The protocol ensures for users to get 
                a complete service always resulting as either the object acceptance (the asset is allowed to 
                be created) or its rejection (copy is found on the db). The network is responsible for the user 
                object authentication as much as for any block on the blockchain irrespective to the actual 
                dollar value attached to
              </li>
              <li>
                <strong>
                  “0 knowledge proof”
                </strong> 
                - Every judgement provided by miners about the object authenticity is protected by a secret knowledge 
                of its HASH ID being unavailable for them, until they get the object processed. Every proof is being 
                verified by the majority of the network to make a final decision on whether to accept or reject the 
                block containing the judgement
              </li>
              <li>
                <strong>
                <Link to="https://github.com/3Dpass/3DP/tree/main/pallets/poscan">PoScan</Link> pallet and <Link to="https://github.com/3Dpass/3DP/tree/main/pallets/poscan-assets">poscanAssets</Link> module
                (storage and <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API">API</Link>) </strong> 
                - The PoScan pallet as well as the poscanAssets module are both integrated into the network runtime providing the access to the network 
                decentralized storage by means of the object tokenization <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API">API</Link>, which allows for:
                <ul className="page-content-text">
                  <li>
                    the user object authentication and its protection from being copied to the extent for the 
                    recognition algorithm precision;
                  </li>
                  <li>
                    non-fungible backed asset creation;
                  </li>
                  <li>
                    property rights definition and its transfers;
                  </li>
                  <li>
                    backed cryptocurrency issuance (the tokenizaton of the object share)
                  </li>
                  <li>
                    collective asset management
                  </li>
                </ul>
              </li>
            </ul>
            <div className="page-content-subtitle" id="3dprc-2-assets">
              Fungible and Non-fungible backed assets
            </div>
            <div className="page-content-text">
            By means of dealing with the additional properties 3DPRC-2 makes it possible to tokenize the object into either 
            Fungible or Non-fungible asset, depending on the purpose of its tokenization. And only one of its properties could have been tokenized simultaneously. 
            It is prohibited to have multiple properties tokenized at the time (It's not allowed to sell one object twice).
            </div>

            <div className="page-content-text">
            Thus, the tokenization of the object Share, as well as such properties as: Weight, Square, Volume, Length, etc, 
            will always stand for its collective ownership or ICO (Initial Coin Offering). 
            These properties will be tokenized as Fungible assets, the MaxSupply of which is limited to the property value attached to the object. 
            For example, if the object weight is 1000 gram, then the "MaxSupply=1000" limit will be set up for the token created (you won't be able to issue more than 1000 minimum indivisible units). 
            While transferring tokens, the object share ownership is being transferred accordingly.
            </div>
            <Link className="message-text" to="/assets#3dprc2-fungible">
            <div className="page-lead-content">
               Get the object share tokenized
                <div className="page-lead-button">Tokenize</div>
            </div>
            </Link>
            <div className="page-content-text">
            3DPRC-2 allows to tokenize every single object into the Non-Fungible asset.
            If chosen, the "MaxSupply = 1" limit will be applied to the token created. Whereas "1" is the minimum indivisible unit of The Ledger of Things. 
            By means of transferring this unit, the ownership of the entire object is being transferred.
            </div>
            <Link className="message-text" to="/assets#3dprc2-non-fungible">
            <div className="page-lead-content">
               Turn the object into non-fungible asset
                <div className="page-lead-button">Tokenize</div>
            </div>
            </Link>
            <div className="page-content-subtitle" id="3dprc-2-asset-management">
              Collective asset management
            </div>
            <div className="page-content-text">
              The asset management system is designed for its shareholders to manage the asset via democracy vote.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="fungibleassets">
          <div className="page-content-inner">
          <div className="page-content-title">Fungible assets</div>
          <div className="page-content-text">
              "The Ledger of Things" is equipped with the <Link to="https://github.com/3Dpass/3DP/tree/main/pallets/poscan-assets">poscanAssets</Link> module
              providing some useful methods for dealing with simple fungible assets without a necessity to run a smart contract.
            </div>
            <Link className="message-text" to="/assets#conventional-fungible-assets">
            <div className="page-lead-content">
              Regular fungible asset
                <div className="page-lead-button">Create</div>
            </div>
            </Link>
          </div>
        </div>
        <div className="page-content-block" id="smartcontracts">
          <div className="page-content-inner">
            <div className="page-content-title">Smart Contracts</div>
            <div className="page-content-text">
              Substrate Smart contract trait using <Link to="https://use.ink/">ink</Link>, a <Link to="https://www.rust-lang.org/">Rust</Link>-based embedded
              domain specific language (
              <Link to="https://wiki.haskell.org/Embedded_domain_specific_language">
                eDSL
              </Link>
              ) for writing{" "}
              <Link to="https://webassembly.org/">WebAssembly</Link> smart
              contracts. Learn more about{" "}
              <Link to="https://use.ink/ink-vs-solidity/">
                how could that be compared to Solidity
              </Link>
              . Follow the <Link to="/fungible-tokens-minting">guiudelines</Link> to run your smart contract on 3Dpsass.
            </div>
            <div className="page-content-text">
              Coming soon! EVM emulator pallet, which allows for unmodified EVM
              code to be executed on 3Dpass blockchain. This feature is designed
              to closely emulate the functionality of executing contracts on the
              Ethereum mainnet within 3Dpass network.
            </div>
            <Link className="message-text" to="/assets#smart-contracts">
            <div className="page-lead-content">
              Smart contract
                <div className="page-lead-button">Run</div>
            </div>
            </Link>
          </div>
        </div>
        <div className="page-content-block" id="atomicswap">
          <div className="page-content-inner">
          <div className="page-content-title">Atomic Swap</div>
           <div className="page-content-text">
            <Link to="https://github.com/paritytech/substrate/tree/master/frame/atomic-swap">Atomic Swap</Link> Substrate module providing the option of making safely and the time-proof-based p2p swap between two given assets issued on The Ledger of Things.
            In order to recieve some funds, atomically sent from one account to another, the "claim" transaction must be initiated by the target account. 
            If the swap has still not been claimed during the timeframe limit, it will then be available to cancel by its sender. 
           </div>
           <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/atomic_swap.png"
              alt="img"
            />
          </div>
        </div>
        <div className="page-content-block" id="dex">
          <div className="page-content-inner">
          <div className="page-content-title">Embedded DEX module</div>
           <div className="page-content-text">
            The <Link to="https://github.com/3Dpass/3DP/tree/main/pallets/asset-conversion">assetConversion</Link> Substrate module representing a full featured decentralized exchange, based on <Link to="https://github.com/Uniswap/v2-core">Uniswap v2</Link> protocol rules, integrated into The Ledger of Things runtime.  
            Enjoy the <Link to="https://github.com/3Dpass/3DP/wiki/DEX-module-API">DEX API</Link> on Github, create Liquidity Pools and trade the assets issued on The Ledger of Things.
           </div>
           <ul className="page-content-text">
            <li>
            <Link to="https://swap.3dpscan.io">3DPass swap DEX User Interface</Link>
            </li>
            <li>
            <Link to="https://github.com/3Dpass/swap">DEX UI GitHub link</Link>
            </li>
            </ul>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/the_ledger_of_things_dex.png"
              alt="img"
            />
            <Link className="message-text" to="https://swap.3dpscan.io">
            <div className="page-lead-content">
                 Swap your tokens
                <div className="page-lead-button">Swap</div>
            </div>
            </Link>
          </div>
        </div>
        <div className="page-content-block" id="passwords">
          <div className="page-content-inner">
            <div className="page-content-title">
              Passwords And Keys Creation & Recovery
            </div>
            <div className="page-content-text">
              One of the applications of 3Dpass technology is in the creation and 
              recovery of passwords and keys through 3D scanning of objects, 
              utilizing the Multi-object option. This approach bears resemblance 
              to the popular "brain wallet" technology, where crypto wallet keys 
              can be recovered using a backup "seed phrase".
            </div>
            <div className="page-content-text">
            However, 3Dpass innovates on this concept by using the shape of a 3D 
            object as the seed data instead. When combined with the owner's 
            biometric data or other additional properties, this results in a 
            complex HASH ID derived from multiple objects. This multi-object 
            HASH ID offers significant resistance against attacks and provides
            several advantages, including:
            </div>
            <ol className="page-content-text">
              <li>
                <i>Enhanced Security</i>: The use of multiple objects and biometric 
                data creates a robust authentication mechanism, making it 
                difficult for attackers to compromise.
              </li>
              <li>
              <i>Unique Personalization</i>: Each HASH ID is unique to the combination 
                of objects and biometric data used, providing personalized security solutions.
              </li>
              <li>
              <i>Versatility</i>: It can be applied across various sectors beyond cryptocurrency,
                such as digital asset management and authentication.
              </li>
              <li>
              <i>Scalability</i>: As technology advances, more sophisticated algorithms and recognition 
                techniques can be integrated, further enhancing security and usability.
              </li>
              <li>
                <i>Resilience</i>: The decentralized and immutable nature of blockchain ensures that 
                HASH IDs are tamper-proof and reliable over time.
              </li>
            </ol>
            <div className="page-content-text">Utilization:</div>
            <ul className="page-content-text">
              <li><Link to="/community#use-cases-crypto">Cryptocurrency wallets</Link></li>
              <li>Access control systems</li>
              <li>Backups data encryption</li>
              <li>Keys and passwords from internet accounts</li>
              <li>Multi-factor authenticaton</li>
            </ul>
            <div className="page-content-text">
              Use either <Link to="/mobile-wallet">3Dpass mobile wallet</Link> or{" "}
              <Link to="https://github.com/3Dpass/pass3d">pass3d</Link> CLI tool
              for Linux to generate your password out of 3D object. The mobile
              wallet is equiped with the feature of <Link to="/mobile-wallet#creation">3D-object-wallet creation</Link>.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Features;
