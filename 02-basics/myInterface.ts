interface User {
  readonly dbId?: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial: () => string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "instructor";
}

const njoro: Admin = {
  dbId: 22,
  email: "n@n.com",
  userId: 111,
  role: "admin",
  githubToken: "github",
  startTrial: () => "trial started",
  getCoupon: (name: "njoro10", off: 10) => {
    return 10;
  },
};
njoro.email = "nj@nj.com";

export {};
