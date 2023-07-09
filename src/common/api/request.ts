import axios from "axios";
import { getCookie } from "typescript-cookie";

export const getAccessToken = () => {
    const accessToken = getCookie('token');
    // const accessToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImJhckkyeG9mR1J4VXF6c2pwejhTWCJ9.eyJpc3MiOiJodHRwczovL2Rldi1tbXB1MHF2NHg4YzFjN3IyLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJ6ZFAzSEpCSWZLbTg5Wnp1RXlBU01Gd3BjTkY5WHhvSEBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtbW1wdTBxdjR4OGMxYzdyMi51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY4ODIyNTY0MCwiZXhwIjoxNjg4MzEyMDQwLCJhenAiOiJ6ZFAzSEpCSWZLbTg5Wnp1RXlBU01Gd3BjTkY5WHhvSCIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.Q0Ejddo5pamo92y-9ouI6JDkT4pnhEI9GjtdprjOmCrCGOXyzbxTYnCVZ_oGSzXfFYoGb7VRk00q9l71HvSfqFGv6k0-CNrH45HR-J64JPmXR7jcUAgkEqQJJMBzNKUf1dRBwkymOPWVoiMKMTrTfVK9Op1ivT0A0Fu0123DVG5ClGFz1jaC-LNqgVGu6Ad_Tb5h4b_rNIeUjoDqzLmGO-sMgz9XOk1IYLCso7bCTk3Mrf64efYXYRKnrpcyM8MJzRv1Vx9ARpn_3YLkDiCwbZEJA0wD125_re5LKi40e8On0OOFhb9S7-COSJz4bj9eGTXpsi2oI11-6DhoIOBtIQ"
    return accessToken;
  };

const axiosClient = axios.create({
    baseURL: 'https://be-moon-studify.vercel.app/api',
    headers: {
      "Content-Type": "application/json",
      "Accept": "*/*",
    }
})

axiosClient.interceptors.request.use((config: any) => {
    const token = getAccessToken();
    //   debugger;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  axiosClient.interceptors.response.use(
    (response) => {
      if (response && response.data) {
        return response.data;
      }
      return response;
    },
  );

export default axiosClient;