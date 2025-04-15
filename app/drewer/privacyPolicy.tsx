import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { IconBackArrow } from "@/assets/icon/icon";
import { useNavigation } from "expo-router";
import tw from "@/lib/tailwind";

const privacyPolicy = () => {
  const router = useNavigation();
  return (
    <View style={tw`px-6`}>
      <Pressable
        onPress={() => {
          router.goBack();
        }}
        style={tw`flex-row items-center mt-5 gap-2`}
      >
        <SvgXml xml={IconBackArrow} />
        <Text style={tw`text-[#262626] font-DegularDisplayBold text-2xl`}>
          Back
        </Text>
      </Pressable>

      {/* ======== banner section ================= */}
      <View style={tw``}>
        <Image
          style={tw`relative w-full h-32 mx-auto rounded-2xl my-6`}
          source={require("../../assets/images/bg-car.jpg")}
        />

        <View style={tw`absolute bottom-5 p-4 `}>
          <Text style={tw`font-DegularDisplayBold text-xl text-white mb-1`}>
            Privacy Policy
          </Text>
          <Text style={tw`font-DegularDisplaySemibold text-sm text-white`}>
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your personal information.
          </Text>
        </View>
      </View>

      <View style={tw`gap-4`}>
        <View>
          <View style={tw`flex-row gap-2`}>
            <Text
              style={tw`font-DegularDisplaySemibold text-base text-[#262626]`}
            >
              1.
            </Text>
            <Text
              style={tw`font-DegularDisplaySemibold text-base text-[#262626]`}
            >
              Service Agreement
            </Text>
          </View>
          <View style={tw`flex-row justify-start gap-2`}>
            <Text style={tw`w-1 h-1 rounded-full bg-[#6D6D6D] mt-2`}></Text>
            <Text style={tw`font-normal text-base text-[#6D6D6D]`}>
              Our services include exterior washing, interior cleaning,
              detailing, and additional treatments as per the selected package
            </Text>
          </View>
          <View style={tw`flex-row gap-2`}>
            <Text style={tw`w-1 h-1 rounded-full bg-[#6D6D6D] mt-2`}></Text>
            <Text style={tw`font-normal text-base text-[#6D6D6D]`}>
              Our services include exterior washing, interior cleaning,
              detailing, and additional treatments as per the selected package
            </Text>
          </View>
        </View>
        <View>
          <View style={tw`flex-row gap-2`}>
            <Text
              style={tw`font-DegularDisplaySemibold text-base text-[#262626]`}
            >
              2.
            </Text>
            <Text
              style={tw`font-DegularDisplaySemibold text-base text-[#262626]`}
            >
              Pricing & payments
            </Text>
          </View>
          <View style={tw`flex-row justify-start gap-2`}>
            <Text style={tw`w-1 h-1 rounded-full bg-[#6D6D6D] mt-2`}></Text>
            <Text style={tw`font-normal text-base text-[#6D6D6D]`}>
              Our services include exterior washing, interior cleaning,
              detailing, and additional treatments as per the selected package
            </Text>
          </View>
          <View style={tw`flex-row gap-2`}>
            <Text style={tw`w-1 h-1 rounded-full bg-[#6D6D6D] mt-2`}></Text>
            <Text style={tw`font-normal text-base text-[#6D6D6D]`}>
              Our services include exterior washing, interior cleaning,
              detailing, and additional treatments as per the selected package
            </Text>
          </View>
        </View>
        <View>
          <View style={tw`flex-row gap-2`}>
            <Text
              style={tw`font-DegularDisplaySemibold text-base text-[#262626]`}
            >
              3.
            </Text>
            <Text
              style={tw`font-DegularDisplaySemibold text-base text-[#262626]`}
            >
              Liability Disclaimer
            </Text>
          </View>
          <View style={tw`flex-row justify-start gap-2`}>
            <Text style={tw`w-1 h-1 rounded-full bg-[#6D6D6D] mt-2`}></Text>
            <Text style={tw`font-normal text-base text-[#6D6D6D]`}>
              Our services include exterior washing, interior cleaning,
              detailing, and additional treatments as per the selected package
            </Text>
          </View>
          <View style={tw`flex-row gap-2`}>
            <Text style={tw`w-1 h-1 rounded-full bg-[#6D6D6D] mt-2`}></Text>
            <Text style={tw`font-normal text-base text-[#6D6D6D]`}>
              Our services include exterior washing, interior cleaning,
              detailing, and additional treatments as per the selected package
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default privacyPolicy;
