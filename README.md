# MasterJi's Quote's
A Random Quote Generator Created using ReactJs Tailwindcss And Random Quote's API.

## Specifications

### Every Time Fresh And Random Quote (Quote's Changes Every Time When User Click New Quote Btn)
### Copy Btn For Copy Quotes To Your ClipBoards
### Random Image BackGround For Quote's (Changes Every Time When User Click New Quote Btn)
### Share Btn For Sharing Quotes To Twitter Posts Or Share To Friends Directly On What'sApp

# Step By Guide For Creting This Simple Application

## Setup React (use vite for fast development)
### Install React (npm create vite@latest)
### Also Install React Icons For Addting Icons For Share Btn's (npm install react-icons) Official Documention For React Icons And For Find All Icons Visit : https://react-icons.github.io/


## Install Tailwind CSS 
### npm install tailwindcss @tailwindcss/vite
TIP : For Detailed Guide About How To Use Tailwind Visit Official Site  :  https://tailwindcss.com/docs/installation/using-vite

## After Installtions of TailwinddCss Congfire Tainwindd  Then Follow Follwing Steps 
## 1) In App.jsx Fetch Quotes Data From Random Quotes Api And Save It In States Heres The Code For Reference 

const [quote, setQuote] = useState({});
const fetchQuote = () => {
        fetch("https://dummyjson.com/quotes/random")
            .then((res) => res.json())
            .then((data) => {
                setQuote(data);
                changeBackground();
            });
    };


## 2) Create a Simple Card Div For Showcasing The Quotes 
## 3) Add Btns Below The Card For New Quote Copy Btn And Share Btn For Social Media.


### Here's The Referece Code For Copy Btn

 const copyToClipboard = () => {
        const textToCopy = `"${quote.quote}" - ${quote.author}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };
    

Here's Some Screen Shots Of this Porject On Mobile And PC Screens
    
  ![Screenshot 2025-03-18 131307](https://github.com/user-attachments/assets/f30f3194-429c-4750-a3f9-bd767e3f8bb8)
  ![Screenshot 2025-03-18 131116](https://github.com/user-attachments/assets/b915e02d-b3d7-429e-b08f-36d784749a20)



|| This Project Is An Assignment Task Assigned On MastarJi An Initiative By Hitesh Sir And Team. ||

