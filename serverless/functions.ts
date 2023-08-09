import type { AWS } from '@serverless/typescript';

const functions: AWS["functions"] = {
    setReminder: {
        handler: 'src/functions/createRoom/index.handler',
        events: [
            {
                websocket: {
                    route: '$createRoom',
                }
            }
        ]
    }
}

export default functions;