import {CardDemo} from '@/components/custom/map/map'
import {Map} from 'react-kakao-maps-sdk'
const mayKey = process.env.KAKAO_MAP_KEY
export default function Home() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div id="map" style={{width: '1000px', height: '600px'}}>
        <script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${mayKey}`}></script>
        <Map
          center={{lat: 33.450701, lng: 126.570667}}
          style={{width: '1000px', height: '600px'}}
          level={3}
        />
      </div>
    </div>
  )
}
