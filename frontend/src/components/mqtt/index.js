import React, { createContext, useEffect, useState } from 'react'
import Connection from './Connection'
import Publisher from './Publisher'
import Subscriber from './Subscriber'
import Receiver from './Receiver'
import mqtt from 'mqtt'
import TileMenu from "../TileMenu";

export const QosOption = createContext([])
// https://github.com/mqttjs/MQTT.js#qos
const qosOption = [
    {
        label: '0',
        value: 0,
    },
    {
        label: '1',
        value: 1,
    },
    {
        label: '2',
        value: 2,
    },
]

const HookMqtt = () => {
    const [client, setClient] = useState(null)
    const [isSubed, setIsSub] = useState(false)
    const [payload, setPayload] = useState({})
    const [connectStatus, setConnectStatus] = useState('Connect')

    const httpConnect = () => {
        fetch('http://localhost:5284/Arduino/GetInfo', {method: "GET"})
            .then((response) => response.json()).then((json) => { setPayload(json.uplink_message.decoded_payload)})
    }


    useEffect(() => {
        httpConnect();
        const intervalId = setInterval(() => {
            httpConnect();
        }, 300000) // 5 min refresh
    }, [])


    // useEffect(() => {
    //     if (client) {
    //         // https://github.com/mqttjs/MQTT.js#event-connect
    //         client.on('connect', () => {
    //             setConnectStatus('Connected')
    //             console.log('connection successful')
    //         })

    //         // https://github.com/mqttjs/MQTT.js#event-error
    //         client.on('error', (err) => {
    //             console.error('Connection error: ', err)
    //             client.end()
    //         })

    //         // https://github.com/mqttjs/MQTT.js#event-reconnect
    //         client.on('reconnect', () => {
    //             setConnectStatus('Reconnecting')
    //         })

    //         // https://github.com/mqttjs/MQTT.js#event-message
    //         client.on('message', (topic, message) => {
    //             const payload = { topic, message: message.toString() }
    //             setPayload(payload)
    //             console.log(`received message: ${message} from topic: ${topic}`)
    //         })
    //     }
    // }, [client])

    // disconnect
    // https://github.com/mqttjs/MQTT.js#mqttclientendforce-options-callback
    const mqttDisconnect = () => {
        if (client) {
            try {
                client.end(false, () => {
                    setConnectStatus('Connect')
                    console.log('disconnected successfully')
                })
            } catch (error) {
                console.log('disconnect error:', error)
            }
        }
    }

    // publish message
    // https://github.com/mqttjs/MQTT.js#mqttclientpublishtopic-message-options-callback
    const mqttPublish = (context) => {
        if (client) {
            // topic, QoS & payload for publishing message
            const { topic, qos, payload } = context
            client.publish(topic, payload, { qos }, (error) => {
                if (error) {
                    console.log('Publish error: ', error)
                }
            })
        }
    }

    const mqttSub = (subscription) => {
        if (client) {
            // topic & QoS for MQTT subscribing
            const { topic, qos } = subscription
            // subscribe topic
            // https://github.com/mqttjs/MQTT.js#mqttclientsubscribetopictopic-arraytopic-object-options-callback
            client.subscribe(topic, { qos }, (error) => {
                if (error) {
                    console.log('Subscribe to topics error', error)
                    return
                }
                console.log(`Subscribe to topics: ${topic}`)
                setIsSub(true)
            })
        }
    }

    // unsubscribe topic
    // https://github.com/mqttjs/MQTT.js#mqttclientunsubscribetopictopic-array-options-callback
    const mqttUnSub = (subscription) => {
        if (client) {
            const { topic, qos } = subscription
            client.unsubscribe(topic, { qos }, (error) => {
                if (error) {
                    console.log('Unsubscribe error', error)
                    return
                }
                console.log(`unsubscribed topic: ${topic}`)
                setIsSub(false)
            })
        }
    }

    return (
        <>
            <TileMenu payload={payload}/>
            {/* <Connection
                connect={mqttConnect}
                disconnect={mqttDisconnect}
                connectBtn={connectStatus}
            />
            <QosOption.Provider value={qosOption}>
                <Subscriber sub={mqttSub} unSub={mqttUnSub} showUnsub={isSubed} />
                <Publisher publish={mqttPublish} />
            </QosOption.Provider>
            <Receiver payload={payload} /> */}
        </>
    )
}

export default HookMqtt