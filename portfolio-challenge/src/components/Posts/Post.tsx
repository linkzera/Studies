/* eslint-disable @next/next/no-img-element */
import { Container } from "../Container";

export const Post = () => {
  return (
    <Container className="px-8 text-purple-100">
      <div className="flex gap-5">
        
        <img src="https://via.placeholder.com/150" alt="avatar image" className="rounded-full w-32 h-32" />
        
        <div className="flex flex-col gap-5">
        
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold">Erro adb devices no Genymotion e Android Studio (React Native)</h1>
            <span className="text-sm">2 anos atrás</span>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-base">Erro adb devices no Genymotion e Android Studio (React Native)</span>
            <div className="flex gap-3 text-sm">
              <span>#react-native</span>
              <span>#react-native</span>
              <span>#react-native</span>
              <span>#react-native</span>
            </div>
          </div>
        
        </div>
      </div>
    </Container>
  );
}