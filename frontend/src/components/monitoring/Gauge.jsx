import { useEffect, useRef } from 'react';
import SvgGauge from "svg-gauge";

const defaultOptions = {
    animDuration : 1,
    showvalue: true,
    initialValue: 0
}

export default function Gauge(props){
    const gaugeEl = useRef(null);
    const gaugeRef = useRef(null);

    useEffect(()=>{
        if(!gaugeRef.current){
            const options = { ...defaultOptions, ...props};
            gaugeRef.current = SvgGauge(gaugeEl.current, options);
            gaugeRef.current.setValue(options.initialValue);
        }

        gaugeRef.current.setValueAnimated(props.value, 1);
    }, [props]);

    return <div ref={gaugeEl} className="gauge-container" />
}