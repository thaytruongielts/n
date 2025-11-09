import type { GrammarUnit } from '../types';

export const grammarUnits: GrammarUnit[] = [
  {
    id: 1,
    title: "Unit 1: My hobbies",
    topic: "Thì hiện tại đơn (Simple Present Tense)",
    description: "Đây là một trong những thì cơ bản nhất trong tiếng Anh, được sử dụng để diễn tả hành động, sự việc xảy ra thường xuyên hoặc để diễn tả những sự thật, thông tin chung, cụ thể.",
    content: {
      type: 'tense',
      usage: [
        { rule: "Diễn tả một thói quen hoặc hành động được lặp đi lặp lại", example: "I go to the gym every morning. (Mình đến phòng tập mỗi sáng.)" },
        { rule: "Diễn tả một sự thật hiển nhiên", example: "The sun rises in the east. (Mặt trời mọc ở phía đông.)" },
        { rule: "Diễn tả một sự việc được lên kế hoạch và sẽ xảy ra trong tương lai", example: "My flight leaves at 7am tomorrow. (Chuyến bay của mình cất cánh lúc 7 giờ sáng ngày mai.)" },
        { rule: "Diễn tả khả năng năng lực của một người", example: "He speaks French fluently. (Anh ấy nói tiếng Pháp trôi chảy.)" },
        { rule: "Dùng trong điều kiện loại 1 ở mệnh đề \"if\"", example: "If I have time, I will go to the movies. (Nếu mình có thời gian, mình sẽ đến xem phim.)" }
      ],
      structure: {
        verb: {
          affirmative: { rule: "S + V(es)/O", example: "They always come to class on time. (Họ luôn đến lớp đúng giờ.)" },
          negative: { rule: "S + don't/ doesn't + V + O", example: "They don't play football on Sundays. (Họ không chơi bóng đá vào Chủ Nhật.)" },
          interrogative: { rule: "Do/Does + S + V + O?", example: "Do you speak Spanish? (Bạn có nói được tiếng Tây Ban Nha không?)" }
        },
        toBe: {
          affirmative: { rule: "S + am/ are/ is + N/ Adj", example: "She is a teacher. (Cô ấy là giáo viên.)" },
          negative: { rule: "S + am/ are/ is + not + N/ Adj", example: "They are not interested in music. (Họ không hứng thú với âm nhạc.)" },
          interrogative: { rule: "Am/ Are/ Is + S + ...? / WH-word + am/ are/ is + S +...?", example: "Are you hungry? (Cậu có đói bụng không?) Who is she? – She is my sister. (Cô ấy là ai? – Cô ấy là em gái của mình.)" }
        }
      }
    },
    quiz: [
        { question: "She ______ her homework every day.", options: ["do", "does", "is doing", "did"], correctAnswer: "does" },
        { question: "They ______ to school by bus.", options: ["go", "goes", "are going", "went"], correctAnswer: "go" },
        { question: "He ______ like coffee.", options: ["not", "don't", "doesn't", "isn't"], correctAnswer: "doesn't" },
        { question: "______ you play the guitar?", options: ["Is", "Are", "Do", "Does"], correctAnswer: "Do" },
        { question: "The sun ______ in the east.", options: ["rise", "rises", "is rising", "rose"], correctAnswer: "rises" },
        { question: "We usually ______ out on weekends.", options: ["not eat", "don't eat", "doesn't eat", "aren't eat"], correctAnswer: "don't eat" },
        { question: "What time ______ the movie start?", options: ["do", "does", "is", "are"], correctAnswer: "does" },
        { question: "My sister ______ very well.", options: ["sing", "sings", "is singing", "sang"], correctAnswer: "sings" },
        { question: "I ______ a student.", options: ["am", "is", "are", "be"], correctAnswer: "am" },
        { question: "Cats ______ milk.", options: ["drink", "drinks", "is drinking", "drank"], correctAnswer: "drink" }
    ]
  },
  {
    id: 3,
    title: "Unit 3: Community service",
    topic: "Thì quá khứ đơn (Simple Past Tense)",
    description: "Dùng để diễn tả những hành động đã bắt đầu và kết thúc trong quá khứ, không còn liên quan tới hiện tại. Thì quá khứ đơn có thể kết hợp với trạng từ chỉ thời gian để diễn tả thời điểm hoặc khoảng thời gian cụ thể mà hành động đã xảy ra trong quá khứ.",
    content: {
      type: 'tense',
      usage: [
        { rule: "Diễn tả một sự việc hay hành động đã diễn ra tại 1 thời điểm cụ thể và kết thúc trong quá khứ.", example: "I visited my grandparents last weekend. (Mình đã thăm ông bà cuối tuần trước.)" },
        { rule: "Diễn tả các hành động xảy ra nối tiếp trong quá khứ.", example: "I woke up, brushed my teeth, and then had breakfast. (Tôi đã thức dậy, đánh răng, và sau đó ăn sáng.)" },
        { rule: "Diễn tả 1 hành động xen vào giữa 1 hành động khác đang xảy ra trong quá khứ.", example: "While I was studying, my friend called me. (Khi tôi đang học bài, bạn của tôi đã gọi điện đến.)" },
        { rule: "Dùng trong mệnh đề \"if\" của câu điều kiện loại II.", example: "If I had more money, I would travel around the world. (Nếu mình có nhiều tiền hơn, mình sẽ đi du lịch thế giới.)" },
        { rule: "Dùng cho câu ước không có thật.", example: "I wish I had a million dollars. (Mình ước mình có một triệu đô la.)" },
        { rule: "Dùng để miêu tả 1 sự kiện lịch sử.", example: "Christopher Columbus discovered America in 1492. (Christopher Columbus đã khám phá ra châu Mỹ vào năm 1492.)" }
      ],
      structure: {
        verb: {
          affirmative: { rule: "S + Ved/PI + O", example: "She visited her grandparents last weekend. (Cô ấy đã đến thăm ông bà vào cuối tuần trước.)" },
          negative: { rule: "S + did not (didn't) + V + O", example: "She didn't finish her homework on time. (Cô ấy đã không hoàn thành bài tập về nhà đúng giờ.)" },
          interrogative: { rule: "Did + S + V + O?", example: "Did he play soccer when he was younger? (Cậu ấy có từng chơi bóng đá lúc còn trẻ không?)" }
        },
        toBe: {
          affirmative: { rule: "S + was/ were + N/ Adj", example: "They were tired after the long journey. (Họ mệt mỏi sau cuộc hành trình dài.)" },
          negative: { rule: "S + was/ were + not + N/ Adj", example: "The students were not happy with their grades. (Các sinh viên không hài lòng với điểm số của họ.)" },
          interrogative: { rule: "Was/ Were + S + N/ Adj? / WH-word + was/ were + S (noun + N/ Adj)?", example: "Was your father a teacher? (Bố cậu có phải giáo viên không?) Why were you not at the party last night? (Tại sao cậu không đến bữa tiệc tối qua?)" }
        }
      }
    },
    quiz: [
      { question: "What ______ you do yesterday?", options: ["did", "do", "does", "doing"], correctAnswer: "did" },
      { question: "He ______ his breakfast before he went to work.", options: ["ate", "eat", "eats", "eating"], correctAnswer: "ate" },
      { question: "She ______ to the gym last night.", options: ["goes", "go", "went", "going"], correctAnswer: "went" },
      { question: "They ______ a movie at the cinema last night.", options: ["watch", "watched", "watching", "watches"], correctAnswer: "watched" },
      { question: "I ______ my keys this morning, so I couldn't open the door.", options: ["lose", "lost", "losing", "have lost"], correctAnswer: "lost" },
      { question: "We ______ in that house when I was a child.", options: ["live", "lived", "are living", "have lived"], correctAnswer: "lived" },
      { question: "______ you see the football match on TV yesterday?", options: ["Do", "Does", "Did", "Were"], correctAnswer: "Did" },
      { question: "He ______ very tired after the long flight.", options: ["is", "was", "were", "be"], correctAnswer: "was" },
      { question: "My parents ______ to Italy for their holiday last year.", options: ["go", "going", "went", "have gone"], correctAnswer: "went" },
      { question: "She ______ her friend at the mall yesterday afternoon.", options: ["meet", "meets", "met", "meeting"], correctAnswer: "met" }
    ]
  },
  {
    id: 4,
    title: "Unit 4: Music and arts",
    topic: "Câu so sánh (Comparisons)",
    description: "Trong tiếng Anh có nhiều cấu trúc so sánh mà bạn có thể dùng để mô tả sự khác nhau hoặc tương đồng giữa hai hay nhiều vật, người, ý tưởng nào đó.",
    content: {
      type: 'comparison',
      structures: [
        { structureType: "Like", meaning: "Như, giống như", usage: "Dùng để diễn tả sự giống nhau giữa 2 người, sự vật, hiện tượng nào đó.", structure: "S + be + like + O", example: "He runs like a cheetah. (Anh ấy chạy nhanh như một con báo.)" },
        { structureType: "Different from", meaning: "Khác với", usage: "Dùng để nói về sự khác nhau giữa hai hoặc nhiều đối tượng.", structure: "S + be + different from + O", example: "Jane’s personality is different from her sister’s. (Tính cách của Jane khác với chị gái mình.)" },
        { structureType: "As ... as", meaning: "Còn ... như", usage: "Diễn tả 2 sự vật, hiện tượng tương tự như nhau về một tính chất, đặc điểm nào đó.", structure: "S + be + as + Adj + as + O", example: "He is as busy as a bee. (Anh ấy bận rộn như một con ong.)" },
        { structureType: "Not as ... as", meaning: "Không ... như", usage: "Diễn tả 1 sự vật, hiện tượng không bằng một sự vật, hiện tượng khác về đặc điểm, tính chất nào đó.", structure: "S + be + not as + Adj + as + O", example: "My new phone is not as expensive as my old one. (Điện thoại mới của tôi không đắt bằng cái cũ.)" }
      ]
    },
    quiz: [
      { question: "My car is ______ his car.", options: ["fast", "as fast as", "not fast as", "different fast from"], correctAnswer: "as fast as" },
      { question: "John's grades are ______ Sarah's grades.", options: ["as good as", "not good as", "good from", "not good like as"], correctAnswer: "as good as" },
      { question: "Her English is good, but not ______ her brother's.", options: ["as fluent as", "fluent like", "fluent from", "different from"], correctAnswer: "as fluent as" },
      { question: "My sister is tall and slim, ______ a model.", options: ["like", "as", "from", "than"], correctAnswer: "like" },
      { question: "The weather today is warm and sunny, ______ a summer day.", options: ["like", "as", "different from", "not as"], correctAnswer: "like" },
      { question: "This movie is ______ the book.", options: ["not interesting as", "not as interesting as", "different interesting", "like interesting as"], correctAnswer: "not as interesting as" },
      { question: "Your new haircut is very ______ your old one.", options: ["different from", "different as", "as different", "like from"], correctAnswer: "different from" },
      { question: "He is ______ a rock; nothing can move him.", options: ["as strong as", "strong like", "strong from", "not strong as"], correctAnswer: "as strong as" },
      { question: "This jacket is ______ the one I saw yesterday.", options: ["not as expensive as", "not expensive from", "different expensive", "like expensive"], correctAnswer: "not as expensive as" },
      { question: "My hometown is very ______ yours.", options: ["different from", "different like", "as different as", "not as"], correctAnswer: "different from" }
    ]
  },
  {
    id: 5,
    title: "Unit 5: Vietnamese Food and Drink",
    topic: "Lượng từ (Quantifiers)",
    description: "Lượng từ là từ loại dùng để mô tả hoặc lượng hoặc số lượng chính xác của một nhóm đối tượng nào đó.",
    content: {
      type: 'quantifier',
      structures: [
        { quantifier: "Some", meaning: "Một ít, một vài", usage: "Đứng trước danh từ đếm được số nhiều và danh từ không đếm được. Thường được sử dụng trong câu khẳng định.", example: "Could you please give me some water? (Bạn có thể cho mình ít nước được không?)" },
        { quantifier: "A lot of / Lots of", meaning: "Nhiều", usage: "Đứng trước danh từ đếm được số nhiều và danh từ không đếm được. Thường được sử dụng trong câu khẳng định.", example: "There are a lot of people in the park today. (Có nhiều người ở công viên ngày hôm nay.)" }
      ]
    },
    quiz: [
        { question: "There are ______ people waiting outside the building.", options: ["a lot of", "some"], correctAnswer: "a lot of" },
        { question: "Could you please give me ______ information about the project?", options: ["some", "a lot of"], correctAnswer: "some" },
        { question: "I need to buy ______ milk from the store.", options: ["some", "a lot of"], correctAnswer: "some" },
        { question: "______ students passed the exam.", options: ["A lot of", "Some"], correctAnswer: "A lot of" },
        { question: "She has ______ beautiful paintings in her house.", options: ["a lot of", "some"], correctAnswer: "a lot of" },
        { question: "Would you like ______ tea?", options: ["some", "a lot of"], correctAnswer: "some" },
        { question: "He spends ______ time playing video games.", options: ["a lot of", "some"], correctAnswer: "a lot of" },
        { question: "We need ______ chairs for the party.", options: ["some", "a lot of"], correctAnswer: "some" },
        { question: "There is ______ sugar in the bowl.", options: ["some", "a lot of"], correctAnswer: "some" },
        { question: "She received ______ presents for her birthday.", options: ["a lot of", "some"], correctAnswer: "a lot of" }
    ]
  },
  {
    id: 6,
    title: "Unit 6: The first university in Viet Nam",
    topic: "Giới từ chỉ thời gian (Prepositions of Time)",
    description: "Giới từ được dùng để biểu thị mối quan hệ giữa các thành phần trong câu, thường đứng trước danh từ hoặc đại từ để tạo thành một cụm giới từ tiếng Anh.",
    content: {
        type: 'preposition',
        structures: [
            {
                preposition: "At",
                usages: [
                    { usage: "Dùng cho một khoảng thời gian hoặc một mốc thời gian chung chung.", example: "at the party, at the weekend" },
                    { usage: "Thời gian chính xác trong ngày.", example: "at 7:30 pm" },
                    { usage: "Một thời điểm trong ngày.", example: "at noon, at midnight" }
                ]
            },
            {
                preposition: "On",
                usages: [
                    { usage: "Ngày cụ thể trong tuần.", example: "on Monday, on Friday" },
                    { usage: "Một ngày đặc biệt trong năm.", example: "on New Year’s Day, on Valentine’s Day" },
                    { usage: "Một ngày cụ thể trong một sự kiện nào đó.", example: "on the first day of the conference" }
                ]
            },
            {
                preposition: "In",
                usages: [
                    { usage: "Dùng để chỉ khoảng thời gian dài hơn.", example: "in January, in winter, in 2024" },
                    { usage: "Dùng trước tháng.", example: "in January, in December" },
                    { usage: "Tên mùa.", example: "in winter, in summer" }
                ]
            }
        ]
    },
    quiz: [
        { question: "My birthday is ______ January.", options: ["at", "on", "in", "since"], correctAnswer: "in" },
        { question: "The school party is ______ Friday night.", options: ["at", "on", "in", "for"], correctAnswer: "on" },
        { question: "I will meet you ______ 6 PM.", options: ["at", "on", "in", "by"], correctAnswer: "at" },
        { question: "They usually go to the beach ______ the summer.", options: ["at", "on", "in", "during"], correctAnswer: "in" },
        { question: "The concert starts ______ 8:30 PM.", options: ["at", "on", "in", "from"], correctAnswer: "at" },
        { question: "We have an important exam ______ Wednesday morning.", options: ["at", "on", "in", "about"], correctAnswer: "on" },
        { question: "He was born ______ 2005.", options: ["at", "on", "in", "ago"], correctAnswer: "in" },
        { question: "The store is closed ______ Sundays.", options: ["at", "on", "in", "while"], correctAnswer: "on" },
        { question: "Let's have lunch ______ noon.", options: ["at", "on", "in", "over"], correctAnswer: "at" },
        { question: "The flowers bloom ______ the spring.", options: ["at", "on", "in", "of"], correctAnswer: "in" }
    ]
  },
  {
    id: 7,
    title: "Unit 7: Perfect Gerunds & Participles",
    topic: "Danh động từ hoàn thành & Mệnh đề phân từ hoàn thành",
    description: "Hiểu và phân biệt cách dùng của danh động từ hoàn thành và mệnh đề phân từ hoàn thành để diễn tả các hành động đã hoàn tất trong quá khứ.",
    content: {
      type: 'gerund-participle',
      perfectGerunds: {
        definition: "Danh động từ hoàn thành được tạo ra bằng cách sử dụng trợ động từ \"having\" và quá khứ phân từ. Cấu trúc này luôn đề cập đến khoảng thời gian hoặc hành động xảy ra trước động từ trong mệnh đề chính. Nó nhấn mạnh hành động ấy đã hoàn thành trong quá khứ.",
        structure: "having + V3/ed",
        functions: [
          { role: "Đóng vai trò chủ ngữ trong câu", example: "Having learned the trade of an electrician helped Nam secure a job." },
          { role: "Đóng vai trò tân ngữ sau động từ (admit, deny, regret, remember...)", example: "My friend didn't remember having lent me his money." },
          { role: "Đóng vai trò tân ngữ sau giới từ", example: "She was admitted to a prestigious institution because of having studied hard." }
        ]
      },
      perfectParticipleClauses: {
        definition: "Mệnh đề phân từ hoàn thành được sử dụng để thể hiện một sự việc đã hoàn thành trước một thời điểm khác trong quá khứ. Có cấu trúc tương tự như Perfect gerunds.",
        functions: [
          { role: "Miêu tả hành động xảy ra trước hành động trong mệnh đề chính", example: "Having studied hard, my children completed the IELTS tests with flying colors." },
          { role: "Đề cập đến lý do của một hành động trong mệnh đề chính", example: "Having finished all her homework, she felt free to go out." }
        ]
      },
      comparison: [
          { aspect: "Định nghĩa", gerund: "Thể hiện một sự việc đã hoàn thành trước một thời điểm trong quá khứ", participle: "Thể hiện một sự việc đã hoàn thành trước một thời điểm khác trong quá khứ" },
          { aspect: "Chức năng", gerund: "Đóng vai trò như một danh từ (chủ ngữ, tân ngữ)", participle: "Đóng vai trò như một trạng từ, bổ nghĩa cho mệnh đề chính, thường dùng để rút gọn mệnh đề khi hai mệnh đề có cùng chủ ngữ." }
      ]
    },
    quiz: [
        { question: "______ the movie before, she didn't want to watch it again.", options: ["Having seen", "Seeing", "To see", "Seen"], correctAnswer: "Having seen" },
        { question: "He was proud of ______ the competition.", options: ["winning", "have won", "having won", "won"], correctAnswer: "having won" },
        { question: "She denied ______ anything about the secret plan.", options: ["knowing", "to know", "having known", "known"], correctAnswer: "having known" },
        { question: "______ his breakfast, he left for work.", options: ["To eat", "Eaten", "Having eaten", "Eating"], correctAnswer: "Having eaten" },
        { question: "I regret not ______ harder for the final exam.", options: ["studying", "having studied", "to study", "studied"], correctAnswer: "having studied" },
        { question: "The man was accused of ______ the bank.", options: ["robbing", "to rob", "having robbed", "robbed"], correctAnswer: "having robbed" },
        { question: "______ all the necessary preparations, they started the experiment.", options: ["Making", "To have made", "Having made", "Made"], correctAnswer: "Having made" },
        { question: "He apologized for ______ so much trouble.", options: ["causing", "to cause", "have caused", "having caused"], correctAnswer: "having caused" },
        { question: "______ the book, I returned it to the library.", options: ["Having read", "Reading", "To read", "Read"], correctAnswer: "Having read" },
        { question: "They celebrated ______ their new house.", options: ["buying", "to buy", "having bought", "bought"], correctAnswer: "having bought" }
    ]
  },
  {
    id: 8,
    title: "Unit 8: Cleft Sentences",
    topic: "Câu chẻ với It is/was... that/who...",
    description: "Câu chẻ được sử dụng để tập trung vào một phần cụ thể trong câu và để nhấn mạnh điều mình muốn nói, giúp cung cấp sự rõ ràng trong các câu phức.",
    content: {
      type: 'cleft-sentence',
      definition: "Câu chẻ được sử dụng để tập trung vào một phần cụ thể trong câu và để nhấn mạnh điều mình muốn nói. Cấu trúc giúp cung cấp sự rõ ràng trong các câu phức.",
      structure: "Mở đầu câu chẻ bằng từ \"It\" để giới thiệu điều mình muốn tập trung vào, và phần còn lại được đặt trong mệnh đề quan hệ cùng đại từ quan hệ, ví dụ: \"that\" hoặc \"who\".",
      emphasisTypes: [
        { type: "Nhấn mạnh chủ ngữ", structure: ["It is/ was + Subject (người) + who/that + V ...", "It is/ was + Subject (vật) + that + V ...."], example: "Bill managed to deal with difficult customers. → It was Bill who/that managed to deal with difficult customers." },
        { type: "Nhấn mạnh tân ngữ", structure: ["It is/ was + Object (người) + whom/that + S + V ...", "It is/ was + Object (vật) + that + S + V ...."], example: "Bill managed to deal with the difficult customers. → It was the difficult customers whom/that Bill managed to deal with." },
        { type: "Nhấn mạnh trạng ngữ", structure: ["It is/ was + Adverb + that + S + V + O..."], example: "Bill dealt with customers at work yesterday. → It was at work that Bill dealt with customers yesterday. / It was yesterday that Bill dealt with customers at work." }
      ]
    },
    quiz: [
        { question: "It was Mary ______ called me last night.", options: ["that", "which", "whom", "whose"], correctAnswer: "that" },
        { question: "It is ______ that I admire the most.", options: ["his courage", "he is courageous", "his courageous", "him courage"], correctAnswer: "his courage" },
        { question: "It was ______ they went on holiday.", options: ["in last summer", "that last summer", "last summer that", "on last summer"], correctAnswer: "last summer that" },
        { question: "It is the red car ______ my father bought.", options: ["who", "which", "whom", "whose"], correctAnswer: "which" },
        { question: "It was ______ who broke the window, not me.", options: ["him", "he", "his", "himself"], correctAnswer: "he" },
        { question: "It was ______ that she explained the reason for her absence.", options: ["yesterday", "yesterday that", "on yesterday", "that yesterday"], correctAnswer: "yesterday that" },
        { question: "It is my brother ______ is a doctor.", options: ["which", "whom", "that", "what"], correctAnswer: "that" },
        { question: "It was ______ that we first met.", options: ["in the park", "the park", "at the park", "where the park"], correctAnswer: "in the park" },
        { question: "It is ______ I need, not your advice.", options: ["your helping", "that your help", "your help that", "your help"], correctAnswer: "your help" },
        { question: "It was with great effort ______ he managed to pass the exam.", options: ["which", "that", "who", "what"], correctAnswer: "that" }
    ]
  },
  {
    id: 9,
    title: "Unit 9: Linking Words & Phrases",
    topic: "Từ và cụm từ nối",
    description: "Các từ và cụm từ được sử dụng nhằm kết nối ý tưởng của hai câu, hai mệnh đề hoặc hai phần trong một bài văn, giúp bài viết trở nên mạch lạc và logic.",
    content: {
      type: 'linking-words',
      definition: "Từ nối và cụm từ liên kết là các từ và cụm từ được sử dụng nhằm kết nối ý tưởng của hai câu, hai mệnh đề hoặc hai phần trong một bài văn.",
      function: "Giúp các bài viết trở nên mạch lạc, logic và tăng tính thuyết phục. Nhờ các từ nối và cụm từ liên kết mà người đọc hiểu rõ ý tưởng và tư duy của người viết.",
      categories: [
        { category: "Bổ sung ý kiến và thông tin", description: "Bổ sung thông tin cho ý trước để làm rõ hoặc hỗ trợ.", words: [{ word: "Besides (this/that)...", meaning: "Bên cạnh (việc đó)..." }, { word: "Moreover,...", meaning: "Hơn nữa" }, { word: "In addition...", meaning: "Ngoài ra" }], example: "We started a campaign against cyberbullying. In addition, we created a video to raise awareness." },
        { category: "Chỉ sự tương phản", description: "Thường chỉ sự trái ngược hoàn toàn giữa các nội dung.", words: [{ word: "However,...", meaning: "Tuy nhiên..." }, { word: "Although,...", meaning: "Mặc dù... nhưng..." }, { word: "In spite of / Despite...", meaning: "Mặc dù/ Bất kể..." }, { word: "By contrast,...", meaning: "Ngược lại..." }], example: "Depression is a common mental illness. However, not many people are aware of it." },
        { category: "Chỉ nguyên nhân", description: "Có vai trò giải thích lý do dẫn đến kết quả giữa các vế.", words: [{ word: "Because,...", meaning: "Vì..." }, { word: "Because of (+ N/V-ing)...", meaning: "Do..." }, { word: "As/Since,...", meaning: "Vì/ Bởi..." }], example: "Big cities experience air and water pollution because of overpopulation." },
        { category: "Chỉ kết quả", description: "Diễn tả kết quả, hệ quả của một hành động, sự việc.", words: [{ word: "As a result,...", meaning: "Vì vậy,..." }, { word: "As a consequence,...", meaning: "Kết quả là/ Hậu quả là,..." }, { word: "Therefore,...", meaning: "Vì thế,..." }], example: "He studied hard. Therefore, he passed the exam easily." }
      ]
    },
    quiz: [
        { question: "The weather was bad. ______, we decided to stay home.", options: ["Therefore", "However", "Although", "In addition"], correctAnswer: "Therefore" },
        { question: "______ he is rich, he is not happy.", options: ["However", "Because", "Although", "As a result"], correctAnswer: "Although" },
        { question: "He couldn't attend the meeting ______ his illness.", options: ["because", "although", "because of", "in spite of"], correctAnswer: "because of" },
        { question: "She is a talented singer. ______, she is a great actress.", options: ["However", "Moreover", "Therefore", "Despite"], correctAnswer: "Moreover" },
        { question: "The flight was delayed. ______, we missed our connection.", options: ["However", "As a consequence", "Despite", "In addition"], correctAnswer: "As a consequence" },
        { question: "______ the rain, we enjoyed the picnic.", options: ["Because", "Although", "In spite of", "Therefore"], correctAnswer: "In spite of" },
        { question: "He forgot his wallet. ______, he couldn't buy anything.", options: ["However", "Moreover", "As a result", "Although"], correctAnswer: "As a result" },
        { question: "I'd like to read that book. ______, I don't have time right now.", options: ["However", "Therefore", "Because", "Moreover"], correctAnswer: "However" },
        { question: "We need more data to make a decision. ______, we should conduct a survey.", options: ["Therefore", "Despite", "Because of", "However"], correctAnswer: "Therefore" },
        { question: "He speaks English fluently ______ he has never been to England.", options: ["because", "although", "therefore", "in spite of"], correctAnswer: "although" }
    ]
  },
  {
    id: 10,
    title: "Unit 10: Compound Nouns",
    topic: "Danh từ ghép",
    description: "Danh từ ghép là một danh từ được tạo ra bằng cách kết hợp hai hoặc nhiều từ riêng biệt để tạo thành một từ mới có ý nghĩa cụ thể.",
    content: {
      type: 'compound-noun',
      definition: "Danh từ ghép là một danh từ được tạo ra bằng cách kết hợp hai hoặc nhiều từ riêng biệt để tạo thành một từ mới có ý nghĩa cụ thể. Cũng tương tự như danh từ, Compound nouns được sử dụng để chỉ người, địa điểm, ý tưởng hoặc sự vật cụ thể nào đó.",
      function: "Danh từ ghép giúp người học diễn đạt ý tưởng phức tạp một cách hiệu quả hơn bằng cách kết hợp các từ.",
      formationRules: [
        { rule: "Noun + noun", examples: ["bus stop (trạm xe buýt)", "city centre (trung tâm thành phố)"] },
        { rule: "Adjective + noun", examples: ["wildlife (động vật hoang dã)", "greenhouse (nhà kính)"] },
        { rule: "Noun + -ing form", examples: ["sightseeing (ngắm cảnh)", "film-making (làm phim)"] },
        { rule: "Verb + preposition", examples: ["break-out (nổ ra, bùng nổ)", "drawback (nhược điểm)"] }
      ],
      types: [
        { type: "Hình thức đóng", description: "Danh từ ghép được viết như một từ duy nhất.", examples: ["classroom (phòng học)"] },
        { type: "Hình thức mở", description: "Có khoảng trống giữa các từ.", examples: ["high school (trường trung học)"] },
        { type: "Hình thức gạch ngang", description: "Các từ được nối với nhau bằng dấu gạch ngang.", examples: ["film-maker (nhà làm phim)"] }
      ],
      pluralizationNotes: [
        "Khi danh từ đứng sau mang nghĩa số nhiều thì người học vẫn giữ nguyên nó là số ít, ví dụ: car park (bãi giữ xe)",
        "Trường hợp phổ biến nhất là người học cho danh từ đứng thứ hai làm số nhiều, ví dụ: car parks",
        "Một số trường hợp ngoại lệ như: clothes shop, passers-by"
      ]
    },
    quiz: [
        { question: "A room where lessons are taught in a school is a ______.", options: ["class room", "class-room", "classroom", "room for class"], correctAnswer: "classroom" },
        { question: "The place where you wait for a bus is a ______.", options: ["bus's stop", "bus-stop", "buses stop", "bus stop"], correctAnswer: "bus stop" },
        { question: "What is the correct plural form of 'mother-in-law'?", options: ["mother-in-laws", "mothers-in-law", "mothers-in-laws", "mother-ins-law"], correctAnswer: "mothers-in-law" },
        { "'Swimming pool' is an example of an ______ compound noun.", options: ["open", "closed", "hyphenated", "irregular"], correctAnswer: "open" },
        { question: "A person who puts out fires is a ______.", options: ["fire-fighter", "fighter of fire", "fire fighter", "firefighter"], correctAnswer: "firefighter" },
        { question: "We need to buy some new ______ for the living room.", options: ["furnitures", "furniture", "piece of furnitures", "furnitures pieces"], correctAnswer: "furniture" },
        { question: "My ______ is my father's mother.", options: ["mother grand", "grand-mother", "grandmother", "grand mother"], correctAnswer: "grandmother" },
        { question: "What is the plural of 'passer-by'?", options: ["passer-bys", "passers-by", "passers-bys", "passer-byes"], correctAnswer: "passers-by" },
        { question: "A house made of green glass for growing plants is a ______.", options: ["greenhouse", "green-house", "house green", "green house"], correctAnswer: "greenhouse" },
        { question: "The ______ is at 7 o'clock in the morning.", options: ["sun-rise", "sunrise", "rising of sun", "sun rise"], correctAnswer: "sunrise" }
    ]
  }
];
