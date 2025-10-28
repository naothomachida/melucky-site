import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [leadData, setLeadData] = useState({});
  const [showTypingDots, setShowTypingDots] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [conversationEnded, setConversationEnded] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Constantes
  const CHAT_CLOSE_KEY = 'chatbot_closed_timestamp';
  const HOURS_48_IN_MS = 48 * 60 * 60 * 1000;

  const isChatRecentlyClosed = () => {
    const closedTimestamp = sessionStorage.getItem(CHAT_CLOSE_KEY);
    if (!closedTimestamp) return false;

    const closedTime = parseInt(closedTimestamp, 10);
    const currentTime = Date.now();
    const timeDifference = currentTime - closedTime;

    return timeDifference < HOURS_48_IN_MS;
  };

  const registerChatClose = () => {
    const currentTime = Date.now();
    sessionStorage.setItem(CHAT_CLOSE_KEY, currentTime.toString());
  };

  const questions = [
    {
      id: 0,
      text: 'Olá! 👋 Aqui é a Engenharia Ana Paula da Melucky Engenharia. Quer receber um orçamento de manutenção predial agora mesmo?',
      options: [
        { text: 'Sim, quero orçamento!', next: 1 },
        { text: 'Preciso de manutenção urgente', next: 1 },
        { text: 'Tenho dúvidas sobre os serviços', next: 1 },
        { text: 'Quero fazer uma vistoria', next: 1 }
      ]
    },
    {
      id: 1,
      text: 'Ótimo! Para preparar um orçamento personalizado, qual é o seu nome?',
      inputType: 'text',
      next: 2
    },
    {
      id: 2,
      text: 'Prazer em conhecê-lo(a)! Qual o seu telefone com WhatsApp?',
      inputType: 'phone',
      next: 3
    },
    {
      id: 3,
      text: 'Perfeito! Em qual condomínio ou endereço será o serviço?',
      inputType: 'text',
      next: 'end'
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleOpenChat = () => {
      if (!isChatRecentlyClosed()) {
        setIsOpen(true);
        if (!isChatStarted) {
          handleStartChat();
        }
      }
    };

    window.addEventListener('openChatbot', handleOpenChat);
    return () => window.removeEventListener('openChatbot', handleOpenChat);
  }, [isChatStarted]);

  useEffect(() => {
    const chatWasClosed = isChatRecentlyClosed();

    const avatarTimer = setTimeout(() => {
      setShowAvatar(true);
    }, 4000);

    if (chatWasClosed) {
      return () => {
        clearTimeout(avatarTimer);
      };
    }

    const bubbleTimer = setTimeout(() => {
      setShowBubble(true);
      setShowTypingDots(true);
    }, 5000);

    const textTimer = setTimeout(() => {
      setShowTypingDots(false);
      setIsTyping(true);

      const fullText = 'Quer um orçamento de manutenção predial? 🏢';
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }, 9000);

    return () => {
      clearTimeout(avatarTimer);
      clearTimeout(bubbleTimer);
      clearTimeout(textTimer);
    };
  }, []);

  const addMessage = (text, sender) => {
    const newMessage = {
      id: Date.now(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleStartChat = () => {
    setIsChatStarted(true);
    setTimeout(() => {
      addMessage(questions[0].text, 'bot');
    }, 500);
  };

  const handleOptionClick = (option) => {
    addMessage(option.text, 'user');

    if (currentQuestion === 0) {
      setLeadData(prev => ({ ...prev, interesse: option.text }));
    }

    setTimeout(() => {
      if (option.next === 'end') {
        handleEndConversation();
      } else {
        setCurrentQuestion(option.next);
        addMessage(questions[option.next].text, 'bot');

        setTimeout(() => {
          inputRef.current?.focus();
        }, 1000);
      }
    }, 800);
  };

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, '');

    if (numbers.length <= 2) {
      return `(${numbers}`;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (currentQuestion === 2) {
      const formatted = formatPhoneNumber(value);
      setUserInput(formatted);
    } else {
      setUserInput(value);
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    addMessage(userInput, 'user');

    const question = questions[currentQuestion];
    if (currentQuestion === 1) {
      setLeadData(prev => ({ ...prev, nome: userInput }));
    } else if (currentQuestion === 2) {
      setLeadData(prev => ({ ...prev, telefone: userInput }));
    } else if (currentQuestion === 3) {
      setLeadData(prev => ({ ...prev, local: userInput }));
    }

    setUserInput('');

    setTimeout(() => {
      if (question.next === 'end') {
        handleEndConversation();
      } else if (question.next !== undefined) {
        setCurrentQuestion(question.next);
        addMessage(questions[question.next].text, 'bot');

        setTimeout(() => {
          inputRef.current?.focus();
        }, 1000);
      }
    }, 800);
  };

  const handleEndConversation = () => {
    const finalMessage = `Obrigada pelas informações! Vou te encaminhar para o WhatsApp para enviarmos seu orçamento personalizado. 😊`;
    addMessage(finalMessage, 'bot');
    setConversationEnded(true);

    console.log('Lead capturado:', leadData);
  };

  const handleWhatsAppRedirect = () => {
    const message = `Olá! Meu nome é ${leadData.nome}.\n\nTenho interesse em: ${leadData.interesse}\nTelefone: ${leadData.telefone}\nLocal do serviço: ${leadData.local}\n\nGostaria de receber um orçamento de manutenção predial da Melucky Engenharia.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5541999491772?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && !isChatStarted) {
      handleStartChat();
    }
  };

  return (
    <div className="fixed bottom-4 sm:bottom-8 left-4 sm:left-8 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] sm:w-[380px] h-[calc(100vh-8rem)] sm:h-[600px] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
            <img
              src="/shutter/7.jpeg"
              alt="Engenharia Ana Paula"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-base sm:text-lg truncate">Eng. Ana Paula</h3>
              <p className="text-xs sm:text-sm text-gray-200 truncate">Melucky Engenharia</p>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                registerChatClose();
              }}
              className="text-white hover:text-gray-300 transition-colors flex-shrink-0"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-3 sm:space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-slate-700 text-white rounded-br-none'
                      : 'bg-white text-gray-900 shadow-md rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}

            {/* Options */}
            {isChatStarted && messages.length > 0 && questions[currentQuestion]?.options && (
              <div className="flex flex-col gap-2 mt-4">
                {questions[currentQuestion].options?.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="bg-white hover:bg-primary-50 text-gray-900 border-2 border-gray-200 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 hover:border-primary-500 text-left"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          {isChatStarted && !conversationEnded && questions[currentQuestion]?.inputType && (
            <form onSubmit={handleInputSubmit} className="p-3 sm:p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                  placeholder={
                    questions[currentQuestion].inputType === 'phone'
                      ? '(41) 99999-9999'
                      : 'Digite sua resposta...'
                  }
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:outline-none focus:border-slate-700 transition-colors"
                  required
                  maxLength={currentQuestion === 2 ? 15 : undefined}
                />
                <button
                  type="submit"
                  className="bg-slate-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-slate-600 transition-colors flex-shrink-0"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          )}

          {/* WhatsApp Button */}
          {conversationEnded && (
            <div className="p-4 bg-white border-t border-gray-200">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Continuar no WhatsApp
              </button>
            </div>
          )}
        </div>
      )}

      {/* Floating Button */}
      <div className="flex items-center gap-4">
        {/* Avatar Button */}
        {showAvatar && !isOpen && (
          <button
            onClick={toggleChat}
            className="relative group animate-scale-in"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:scale-110 transition-transform duration-300">
              <img
                src="/shutter/7.jpeg"
                alt="Engenharia Ana Paula"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Online indicator */}
            <span className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 border-2 border-white rounded-full"></span>
            {/* Pulse animation */}
            <span className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full animate-ping"></span>
          </button>
        )}

        {/* Call to Action Bubble */}
        {!isOpen && showBubble && !bubbleDismissed && (
          <div
            className="bg-white rounded-2xl shadow-xl px-4 sm:px-6 py-3 sm:py-4 max-w-[200px] sm:max-w-[280px] animate-slide-right relative cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            onClick={toggleChat}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setBubbleDismissed(true);
                registerChatClose();
              }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-slate-700 text-white rounded-full hover:bg-slate-600 transition-colors duration-300 flex items-center justify-center"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {showTypingDots ? (
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            ) : (
              <>
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  {displayedText}
                  {isTyping && <span className="animate-pulse">|</span>}
                </p>
                {!isTyping && (
                  <p className="text-xs text-gray-600 animate-slide-up">
                    Clique aqui e receba seu orçamento personalizado!
                  </p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
