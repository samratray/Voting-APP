import React from "react";
import Feature from "../Features/Feature";
import { MdGppGood, MdLibraryAddCheck, MdLock, MdShare } from "react-icons/md";

const Features = () => {
  return (
    <div className="features-wrapper">
      <div className="title-large">Amazing Features</div>
      <div className="title-small">
        Building a Blockchain-Based Voting System: Ensuring Secure and
        Transparent Elections
      </div>

      <div className="mobile-wrapper">
        <div>
          <Feature title="Immutable" icon={<MdLock />} align="right">
            <p>
              The blockchain-based voting system utilizes the core principles of
              blockchain technology, such as immutability and transparency. Each
              vote cast is recorded as a transaction on the blockchain, making
              it tamper-proof and providing transparency throughout the voting
              process.
            </p>
          </Feature>
        </div>

        <div>
          <Feature title="Enhanced Security" icon={<MdGppGood />} align="left">
            <p>
              The voting system leverages cryptographic algorithms to ensure the
              security and integrity of the votes. The decentralized nature of
              the blockchain network prevents unauthorized access and
              manipulation of the voting data. Additionally, the use of digital
              signatures further enhances the security by verifying the
              authenticity of each vote.
            </p>
          </Feature>
        </div>
        <div>
          <Feature
            title="Aadhaar Verification"
            icon={<MdLibraryAddCheck />}
            align="right"
          >
            <p>
              Before casting a vote, the system incorporates an Aadhaar
              verification process. Aadhaar, as a unique identification number,
              helps authenticate the identity of voters. By linking Aadhaar to
              the voting system, it ensures that only eligible voters can
              participate and eliminates the possibility of duplicate or
              fraudulent voting.
            </p>
          </Feature>
        </div>
        <div>
          <Feature
            title="Decentralization and Trust"
            icon={<MdShare />}
            align="left"
          >
            <p>
              The decentralized nature of the blockchain-based voting system
              eliminates the need for a central authority, such as a government
              or election commission, to oversee the voting process. This
              decentralization fosters trust among voters as they can directly
              verify and audit the voting results stored on the blockchain,
              ensuring transparency and minimizing the risk of manipulation.
            </p>
          </Feature>
        </div>
      </div>
    </div>
  );
};

export default Features;
