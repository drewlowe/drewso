/* eslint-disable @next/next/no-img-element */

import { Shield } from '@/components/ui/shield';

export const TechStack = () => (
    <>
        <h3 className={'text-center'}>Web 2 Tech Stack</h3>
        <div className="flex flex-wrap gap-2 items-center justify-center">
            <Shield descriptor={'Language'} technology={'TypeScript'} color={'3178C6'} logo={'typescript'}/>
            <Shield descriptor={'Frontend'} technology={'React'} color={'61DAFB'} logo={'react'}/>
            <Shield descriptor={'Framework'} technology={'Next.js'} color={'000000'} logo={'next.js'}/>
            <Shield descriptor={'Backend'} technology={'Node.js'} color={'339933'} logo={'node.js'}/>
            <Shield descriptor={'Backend'} technology={'Express'} color={'000000'} logo={'express'}/>
            <Shield descriptor={'Backend'} technology={'NestJS'} color={'E0234E'} logo={'nestjs'}/>
            <Shield descriptor={'Mobile'} technology={'React Native'} color={'61DAFB'} logo={'react'}/>
            <Shield descriptor={'Mobile Framework'} technology={'Expo'} color={'000020'} logo={'expo'}/>
            <Shield descriptor={'ORM'} technology={'Prisma'} color={'2D3748'} logo={'prisma'}/>
            <Shield descriptor={'ORM'} technology={'TypeORM'} color={'3178C6'} logo={'typeorm'}/>
            <Shield descriptor={'Async State'} technology={'React Query'} color={'FF4154'} logo={'react-query'}/>
            <Shield descriptor={'State Management'} technology={'Zustand'} color={'FF9900'} logo={'zustand'}/>
            <Shield descriptor={'State Management'} technology={'Redux'} color={'764ABC'} logo={'redux'}/>
            <Shield descriptor={'UI'} technology={'TailwindCSS'} color={'38B2AC'} logo={'tailwindcss'}/>
            <Shield descriptor={'Testing'} technology={'Jest'} color={'C21325'} logo={'jest'}/>
            <Shield descriptor={'Testing'} technology={'Testing Library'} color={'E33332'} logo={'testing-library'}/>
            <Shield descriptor={'Memoization'} technology={'React Scan'} color={'61DAFB'} logo={'react'}/>
            <Shield descriptor={'Accessibility'} technology={'Lighthouse'} color={'F44B21'} logo={'lighthouse'}/>
            <Shield descriptor={'Websockets'} technology={'Socket.IO'} color={'010101'} logo={'socket.io'}/>
            <Shield descriptor={'Analytics'} technology={'Google Analytics'} color={'E37400'} logo={'google-analytics'}/>
            <Shield descriptor={'Payments'} technology={'Stripe'} color={'008CDD'} logo={'stripe'}/>
        </div>
        <h3 className={'text-center'}>Web 3 Tech Stack</h3>
        <div className="flex flex-wrap gap-2 items-center justify-center">
            <Shield descriptor={'Language'} technology={'Solidity'} color={'403988'} logo={'solidity'}/>
            <Shield descriptor={'Blockchain'} technology={'Ethereum'} color={'3C3C3D'} logo={'ethereum'}/>
            <Shield descriptor={'L2 Scaling'} technology={'Polygon'} color={'8247E5'} logo={'polygon'}/>
            <Shield descriptor={'L2 Scaling'} technology={'Optimism'} color={'000000'} logo={'optimism'}/>
            <Shield descriptor={'L2 Scaling'} technology={'Arbitrum'} color={'00D395'} logo={'arbitrum'}/>
            <Shield descriptor={'L2 Scaling'} technology={'zkSync'} color={'F2F2F2'} logo={'zksync'}/>
            <Shield descriptor={'Oracles'} technology={'Chainlink'} color={'375BD2'} logo={'chainlink'}/>
            <Shield descriptor={'Liquidity'} technology={'Uniswap'} color={'FF007A'} logo={'uniswap'}/>
            <Shield descriptor={'Liquidity'} technology={'Balancer'} color={'3A4149'}/>
            <Shield descriptor={'Liquidity'} technology={'Aave'} color={'2EBAC6'} logo={'aave'}/>
            <Shield descriptor={'Framework'} technology={'Foundry'} color={'000000'} logo={'solidity'}/>
            <Shield descriptor={'Framework'} technology={'Hardhat'} color={'F6851B'} logo={'solidity'}/>
            <Shield descriptor={'Nodes'} technology={'Infura'} color={'E4761B'} logo={'infura'}/>
            <Shield descriptor={'Nodes'} technology={'Alchemy'} color={'C531FF'} logo={'alchemy'}/>
            <Shield descriptor={'Web3'} technology={'ethers'} color={'2535A0'} logo={'ethers'}/>
            <Shield descriptor={'Web3'} technology={'web3.js'} color={'F16822'} logo={'web3dotjs'}/>
            <Shield descriptor={'Web3'} technology={'thirdweb'} color={'F213A4'} logo={'thirdweb'}/>
            <Shield descriptor={'Web3'} technology={'wagmi'} color={'000000'} logo={'wagmi'}/>
            <Shield descriptor={'Wallets'} technology={'RainbowKit'} color={'000000'}/>
            <Shield descriptor={'Wallets'} technology={'Safe Wallet'} color={'000000'}/>
            <Shield descriptor={'File Storage'} technology={'IPFS'} color={'65C2CB'} logo={'ipfs'}/>
            <Shield descriptor={'File Storage'} technology={'Arweave'} color={'000000'}/>
        </div>
        <h3 className={'text-center'}>DevOps Tech Stack</h3>
        <div className="flex flex-wrap gap-2 items-center justify-center">

            <Shield descriptor={'Cloud'} technology={'AWS'} color={'232F3E'} logo={'amazonwebservices'}/>
            <Shield descriptor={'Cloud'} technology={'Google Cloud'} color={'4285F4'} logo={'googlecloud'}/>
            <Shield descriptor={'CI/CD'} technology={'GitHub Actions'} color={'2088FF'} logo={'github-actions'}/>
            <Shield descriptor={'Server'} technology={'EC2'} color={'FF9900'} logo={'amazonec2'}/>
            <Shield descriptor={'Server'} technology={'ECS'} color={'FF9900'} logo={'amazonecs'}/>
            <Shield descriptor={'Server'} technology={'Nginx'} color={'269539'} logo={'nginx'}/>
            <Shield descriptor={'Server'} technology={'Apache'} color={'D22128'} logo={'apache'}/>
            <Shield descriptor={'Serverless'} technology={'Vercel'} color={'000000'} logo={'vercel'}/>
            <Shield descriptor={'Serverless'} technology={'Netlify'} color={'00C7B7'} logo={'netlify'}/>
            <Shield descriptor={'Serverless'} technology={'AWS Lambda'} color={'FF9900'} logo={'awslambda'}/>
            <Shield descriptor={'Database'} technology={'RDS'} color={'527FFF'} logo={'amazonrds'}/>
            <Shield descriptor={'Database'} technology={'PostgreSQL'} color={'4169E1'} logo={'postgresql'}/>
            <Shield descriptor={'Database'} technology={'MySQL'} color={'4479A1'} logo={'mysql'}/>
            <Shield descriptor={'Database'} technology={'Supabase'} color={'3ECF8E'} logo={'supabase'}/>
            <Shield descriptor={'Database'} technology={'MongoDB'} color={'47A248'} logo={'mongodb'}/>
            <Shield descriptor={'Cache'} technology={'Redis'} color={'DC382D'} logo={'redis'}/>
            <Shield descriptor={'Containers'} technology={'Docker'} color={'2496ED'} logo={'docker'}/>
            <Shield descriptor={'Process Manager'} technology={'PM2'} color={'2F5A78'} logo={'pm2'}/>
            <Shield descriptor={'DNS'} technology={'Route 53'} color={'8C4FFF'} logo={'amazonroute53'}/>
            <Shield descriptor={'Reverse Proxy'} technology={'Cloudflare'} color={'F38020'} logo={'cloudflare'}/>
            <Shield descriptor={'Monorepo'} technology={'Turborepo'} color={'000000'} logo={'turborepo'}/>
            <Shield descriptor={'Buckets'} technology={'S3'} color={'569A31'} logo={'amazons3'}/>
            <Shield descriptor={'Monitoring'} technology={'Sentry'} color={'FB4226'} logo={'sentry'}/>
        </div>
    </>
)