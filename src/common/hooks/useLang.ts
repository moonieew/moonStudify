import { ToastPositionWithLogical, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { EnumMultiLang } from "../service/notificationService";

export enum MESSAGE_TYPE {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info"
}

export type NotificationParams = {
  status: MESSAGE_TYPE;
  message?: string;
  title?: string;
  duration?: number;
  position?: ToastPositionWithLogical;
};

const commonErrorMessage = (lang: string) => {
  switch (lang) {
    case "en":
      return "Something went wrong, please try again later!";
    case "vi":
      return "Đã xảy ra lỗi, vui lòng thử lại sau!";
    default:
      return "Đã xảy ra lỗi, vui lòng thử lại sau!";
  }
};

export const useLangSwitch = () => {
  const router = useRouter();
  const toast = useToast();
  // const [lang, setLang] = useState<string>(router?.defaultLocale ?? "vi");
  const [lang, setLang] = useState<EnumMultiLang>((router?.defaultLocale as EnumMultiLang) ?? EnumMultiLang.vi);

  const getContentWithLanguage = ({ contentVi, contentEn }: { contentVi?: string; contentEn?: string }): string => {
    return lang === "en" ? contentEn ?? "" : contentVi ?? "";
  };

  const pushNotification = (params: NotificationParams) => {
    toast({
      title: params.title || "Studify",
      description: params.message || commonErrorMessage(lang),
      status: params.status,
      duration: params.duration || 4000,
      isClosable: true,
      position: params.position || "bottom-left",
      variant: "left-accent"
    });
  };

  useEffect(() => {
    if (router?.locale) {
      setLang(router?.locale as EnumMultiLang);
    }
  }, [router]);

  return { lang, getContentWithLanguage, pushNotification };
};
