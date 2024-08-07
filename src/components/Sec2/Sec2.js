import { Link } from "react-router-dom";
import imgsec2 from "../../media/headimg.52bab7066d4da8fab79d.png";
import img1 from "../../media/engineer.36a1a111d803ea6f6a04.png";
import CallMe from "../callme/CallMe";
import WhatsApp from "../whatsApp/Whats";
import "./Sec2.css";

const Sec2 = () => {
  return (
    <section className="Sec2">
      <div className="container">
        <div className="main-title">
          <img src={imgsec2} alt="صباغ رخيص" title="صباغ الكويت" />
          <h2>اعمالنا</h2>
        </div>
        <section className="boxes">
          <div className="box">
            <h2> صباغ الكويت </h2>

            <article className="info">
              <img src={img1} alt="صباغ بالكويت" title="صباغ رخيص" />
              <h1>
                صباغ الكويت <span className="numerPhobe">96594903036</span> صباغ
                شاطر ورخيص عن تجربة احصل على خصم 50% الان مع{" "}
                <strong>صباغ</strong> ابو أحمد
                <h4 className="mt-5">
                  رقم صباغ في الكويت{" "}
                  <span className="numerPhobe">96594903036</span>
                </h4>
                <CallMe />
                <WhatsApp />
              </h1>
            </article>
          </div>

          <div className="box">
            <h2> صباغ الكويت</h2>
            <article className="info">
              <p>
                <Link to="/" data-wpel-link="internal">
                  <strong>صباغ الكويت</strong>
                </Link>{" "}
                من أمهر الصباغين في هذا المجال حيث أنه فني محترف في التعامل مع
                الجدران{" "}
                <span>
                  {" "}
                  ومعالجة مشاكل الجدران سواء كان حفر في الجدار أو غيرها حيث أن
                  جعل السطح أملس من أهم عاومل نجار عملية الصباغة وإظهار الجدار
                  بشكل مثالي ومميز.
                </span>
              </p>
              <img src={img1} alt="صباغ بالكويت" title="فني صباغ" />
            </article>
          </div>
          <div className="box">
            <h2> صباغ الكويت</h2>
            <article className="info">
              <p>
                <b>صباغ الكويت</b>
                <span>
                  &nbsp;لدية خبرة طويلة فى أعمال الديكور و الدهانات الخاصة
                  بالحوائط، فهو يمتلك مهارة فنية فى أعمال الصباغة&nbsp;
                </span>
                <span>
                  وتصميم ديكورات المنازل والفلل والشركات والمستشفيات والمطاعم
                  وغيرها من الأماكن،{" "}
                </span>
                <span>
                  فنحن نتحدث عن شخص يمتلك لمسات فنية وابداعية مميزة يقوم
                  بتطبيقها فى المنازل التى نعيش فيها والمرافق والأماكن التي نذهب
                  إليها وذوق خاص به.
                </span>
              </p>
              <img src={img1} alt="صباغ بالكويت" title="صباغ في الكويت" />
            </article>
          </div>
          <div className="box">
            <h2> فني صباغ</h2>
            <article className="info">
              <p>
                <span>
                  لا يوجد شك أن الألوانات التى يتم طلائها على الحوائط والديكورات
                  المصممة لها تأثير على حالتنا النفسية،{" "}
                </span>
                <span>
                  فعند الحاجة إلى تغيير الوان الدهانات والحوائط تحتاج الى شخص
                  لديه القدرة العالية والمهارة الفائقة والخبرة فى القيام بهذه
                  الاعمال،
                </span>
                ان <b>فني صباغ</b> هو الشخص القادر على تنفيذ كل ما تحتاجة فى
                منزلك، فهو يستخدم أفضل وأجود أنواع الدهانات المستخدمة{" "}
                <span>
                  للحوائط ولديه القدرة على تقديم المقترحات التى تحتاجها وتطبيق
                  أفكاره وأفكارنا وما يدور فى بالنا على أرض الواقع،{" "}
                </span>
                <span>
                  فهو قادر على عمل ديكورات فى غاية الروعة واستخدام الألوان
                  الحديثة التي تتماشى مع ديكورات عصرنا هذا.
                </span>
              </p>
              <img src={img1} alt="فني صباغ" title="معلم صباغ" />
            </article>
          </div>

          <div className="box">
            <h2>
              {" "}
              <Link to="/" data-wpel-link="internal">
                <strong> مميزات صباغ الكويت</strong>
              </Link>{" "}
            </h2>
            <article className="info">
              <ol className="me-2 mt-3">
                <li aria-level="1">
                  <span>
                    لدية الخبرة الطويلة والواسعة فى هذا المجال، فهو قادر على
                    اختيار الألوانات المخصصة لكل غرفة وتحديد الالوانات التى
                    تتناسب مع المساحات الضيقة والواسعة ومع اثاث المكان.
                  </span>
                </li>
                <li aria-level="1">
                  <span>
                    تحديد أهداف ومتطلبات العميل والتعرف عليها للقيام بتنفيذها
                    على أكمل وجه وتحقيق الصورة المرسومة فى خياله على أرض الواقع.
                  </span>
                </li>
                <li aria-level="1">
                  <span>
                    تقديم بعض النصائح والمقترحات التي قد يكون العميل متغافل
                    عنها، وتزويده بمعلومات كافية عن الشكل النهائي للتصميم
                    الوانات المنازل.&nbsp;&nbsp;&nbsp;
                  </span>
                </li>
                <li aria-level="1">
                  <span>
                    استخدام أفضل المعدات والأدوات الحديثة اللازمة فى عمليات طلاء
                    الحوائط والقدرة على استخدام اوراق الحائط وتلصيقها وطلائها
                    بألوانات المناسبة للديكور.
                  </span>
                </li>
                <li aria-level="1">
                  <span>
                    القدرة على رسم الأشكال الهندسية على الحوائط ورسومات
                    الكرتونية فى غرف الأطفال واختيار الالوانات المناسبة لغرف
                    النوم والصالونات.
                  </span>
                </li>
                <li aria-level="1">
                  <span>يستطيع أن يقوم </span>
                  <b>صباغ الكويت</b>
                  <span>
                    {" "}
                    بتصميم الشكل النهائى الألوان الخاصة بالجدران والرسومات التى
                    سيتم تطبيقها قبل العمل فيها من خلال اجهزة الكمبيوتر حتى
                    يساعدك على اختيار ما يتناسب مع شخصيتك.
                  </span>
                </li>
                <li aria-level="1">
                  <span>
                    لديه المهارة على أبراز المكان بشكل مثالي وبطريقة إبداعية
                    وعمل تصميمات حديثة تتناسب مع عصرنا.
                  </span>
                </li>
                <li aria-level="1">
                  <span>
                    استخدام المهارات والخدع الفنية من أجل اللعب بالمساحات الضيقة
                    مثل استخدام المرايات أو باستخدام اشكال ورسومات على الحائط
                    التى تعطى أحساس بوسع المكان.
                  </span>
                </li>
              </ol>
              <img src={img1} alt=" مميزات صباغ الكويت" title="أفضل صباغ" />
            </article>
          </div>

          <div className="box">
            <h2>افضل انواع الدهانات الحديثة لطلاء الحوائط</h2>
            <article className="info">
              <ol className="me-2 mt-3">
                <li aria-level="1">
                  <span>
                    الدهانات المائية: يطلق عليها هذا الاسم لانها تعتمد فى
                    استخدامها على الماء، تتميز بسهولة استخدامة، كما انه يتميز
                    بسهولة تنظيفه باستخدام الماء، كما انه يتميز بدوامه لسنوات
                    طويلة دون حدوث اى تغير فى لون أو بهتانه.
                  </span>
                </li>
                <li aria-level="1">
                  <span>
                    &nbsp;&nbsp;الدهانات البلاستيك المائي: يعتمد هذا الدهان على
                    الاكريليك، فهو يتميز بسهولة تنظيفة بالماء وسرعة تجفيفه، كما
                    ان يمكن استخدامه فى التصميمات الداخلية والخارجية.
                  </span>
                </li>
                <li aria-level="1">
                  <span>
                    الدهانات الزيتية: يستخدم هذا النوع على كافة الأسطح يتميز
                    بلمعانه على الحائط ومناسب للمكان التى تكون فيها الرطوبة
                    عالية مثل الحمامات والمطابخ ولكن من عيوبه عدم سهولة تنظيفه
                    بالماء فهو يحتاج الى الغسيل باستخدام الفرشاة حتى تستطيع أن
                    تقوم بازالة الاتربة والبقع الصعبة.
                  </span>
                </li>
                <li aria-level="1">
                  <span>
                    دهان اللؤلؤى: يعتبر من أبرز أنواع الدهانات الحديثة يضفي
                    مظهرا من الجمال واللمعان على الجدران، يتميز بسهولة دهانه على
                    الحوائط.&nbsp;
                  </span>
                </li>
                <li aria-level="1">
                  <span>
                    ورق الحائط: أصبح استخدام ورق الحائط منتشر بشكل كبير فى هذا
                    الوقت، فهو يستخدم لتزين الجدران الداخلية، يتم وضعه على
                    الحوائط ويتم طلاءه يعطى جمال فى غاية الروعه عند استخدامة كما
                    يتميز باسعاره الغير مكلفة ومناسبة للجميع.&nbsp;
                  </span>
                </li>
              </ol>
              <img src={img1} alt="صباغ شاطر صباغ رخيص" title="صباغ ممتاز" />
            </article>
          </div>

          <div className="box">
            <h2>افضل اسعار صباغ الكويت</h2>
            <article className="info">
              <p>
                <span>
                  يمكنك عزيزى العميل التواصل معنا، فلدينا افضل فريق عمل في{" "}
                </span>
                <span>
                  <b>صباغ بالكويت</b>
                </span>
                <span> قادر على تصميم ديكورات منزلك،&nbsp;</span>
                <span>
                  وطلائها باستخدام اجود انواع الدهانات العالمية، فهو قادر على
                  تنفيذ مهامه فى أقل وقت ممكن ،
                </span>
                وبطريقة احترافية كل ذلك بأفضل الأسعار المتاحة وباقل التكاليف
                الممكنة فنحن نعمل على راحه عملائنا الكرام.
              </p>
              <img src={img1} alt=" صباغ ممتاز" title="صباغ شاطر" />
            </article>
          </div>

          <div className="box">
            <h2>صباغ بالكويت</h2>
            <article className="info">
              <p>
                <span>
                  اذا كنت تفكر في تشطيب منزلك أو الحاجة الي تجديد عليك هنا
                  بالتواصل مع{" "}
                </span>
                <b>صباغ بالكويت</b>
                <b> </b>
                <span>انه من افضل الصباغين </span>
                القادرين على تقديم أفضل الأفكار العصرية والحلول اللازمة في اعمال
                التشطيب ومعالجة أي مشكله تختص بتلك المهمة بالإضافة إلي أنه
                يستخدم أجود الدهانات العالمية التى من الصعب أن يحدث بها أى
                بهتان،{" "}
                <span>
                  عند الأستعانة به تجد أنه قادر على إبهارك بسبب الخدمات المميزة
                  التي يقدمها، أنه يتميز أيضا باسعاره الرخيصة.
                </span>
              </p>
              <img src={img1} alt=" صباغ رخيص" title="صباغ رخيص" />
            </article>
          </div>
          <div className="box">
            <h2>صباغ في الكويت</h2>
            <article className="info">
              <p>
                <span>
                  من منا لا يحلم بالحصول على منزل يتوافر فيه كافة الطرق التي
                  تساعده على الراحة والاستجمام ومن اول الاشياء{" "}
                </span>
                <span>
                  التى تساعد على ذلك الالوانات التي يتم اختيارها والتى بالطبع
                  انها من الاشياء الصعبة والمحيره والتى لا يستطيع{" "}
                </span>
                أن يقوم بها أحد منا وخاصة أنها من الأمور الهامة التى يجب
                اختيارها بدقة وعناية شديدة لان من المستحيل أن يتم تغير الألوانات
                في أوقات قصيرة وخاصة أنها مكلفة لذا إذا كنت تحتاج الي صباغ شاطر
                يستطيع ان يساعدك في ذلك عليك هنا الاستعانة ب
                <b> صباغ في الكويت </b>انه قادر على أختيار الالوانات التى تتناسب
                مع كل عميل والقدرة أيضا على مساعدتك في اختيار الديكورات تبعا
                لشخصيتك فمثلا اذا كنت من الشخصيات الكلاسيكية يختار لك ما يتماشي
                معك حتى تشعر بالرضا والراحة التامة عند الجلوس في المنزل.
              </p>
              <img src={img1} alt="صباغ في الكويت" title="صباغ في الكويت" />
            </article>
          </div>
          <div className="box">
            <h2>صباغ شاطر</h2>
            <article className="info">
              <p>
                <span>
                  إن الحصول على منزل جذاب لا يعتمد فقط على الدهانات بل هناك
                  العديد من الأشياء التى يجب ان تتوافر في الصباغ{" "}
                </span>
                حتى يساعدك فى الحصول على مكان فخم ومنها مثلا الأفكار التي يقدمها
                عند تزيين الحوائط والتى تتناسب مع الالوانات{" "}
                <span>المستخدمة ومع مساحة المكان حيث تجد ان </span>
                <b>صباغ شاطر</b>
                <span>
                  {" "}
                  عندما يقوم باختيار الالوانات الغامقة في المساحات الواسعة{" "}
                </span>
                <span>
                  يقترح على عملائه الديكورات التى يفضل استخدامها ومنها تركيب
                  المرايات والأنتيكات بجانبها أو تعليق لوح على الحائط بها{" "}
                </span>
                <span>
                  صور طبيعية تعطي جمال خاص للحائط كما أنه أيضا يقترح عليك كيفية
                  توزيع وترتيب الاثاث أنه يهتم بكافة التفاصيل{" "}
                </span>
                المختلفة لذلك تجد أنه مميز عن كافة الصباغين لذلك يلجأ إليها
                الكثير من الاشخاص وخاصة لانهم على علم بالأعمال المميزة التي
                يقدمها.
              </p>
              <img
                src={img1}
                alt="أفضل صباغ في الكويت"
                title="صباغ الاندلس الكويت"
              />
            </article>
          </div>
          <div className="box">
            <h2>الصباغ بالكويت</h2>
            <article className="info">
              <p>
                <span>عند الإستعانة</span>
                <b>&nbsp;صباغ الكويت</b>
                <span>
                  {" "}
                  تجد أنه يتعرف أولا على الديكورات التى يحتاج العميل الحصول
                  عليها والإستمتاع الي كافة أفكاره{" "}
                </span>
                <span>
                  بحرص شديد ثم يبدأ أن يقترح عليه الأفكار التى تزيد من جمال
                  المنزل ويقدم الكثير من النصائح التى تتناسب مع المكان والعميل
                  فمثلا{" "}
                </span>
                <span>
                  هناك الكثير من العملاء عند الحاجة إلى تركيب الأسقف المعلقة
                  يختار الأشكال التى لا تتناسب مع المساحة حيث يخطئ الكثير في
                  أختيار{" "}
                </span>
                الأشكال التى تحتوى على الكثير من الزخارف في الأماكن الضيقة
                وبالطبع يعتبر ذلك من الأشياء الخاطئة التى يقع فيها الكثير لأن
                المنازل{" "}
                <span>
                  التى تتميز بالمساحات الضيقة لابد وأن يتم تركيب الأسقف البسيطة
                  بها والتى تتناسب مع الأرتفاع، كل تلك النقاط يستطيع أ
                </span>
                ن تفيدك بها الصباغ المحترف، تواصل معه واحصل على أفضل التصميمات
                الرائعة.
              </p>
              <img src={img1} alt=" معلم صباغ" title="معلم صباغ" />
            </article>
          </div>
          <div className="box">
            <h2>افضل صباغ بالكويت</h2>
            <article className="info">
              <p>
                <span>
                  ديكورات المنزل من الأشياء الهامة للغاية في يومنا هذا حتى
                  نستطيع أن نحصل على مكان يوفر لنا الراحة النفسية{" "}
                </span>
                <span>
                  وخاصة بعد يوم ملئ بالضغط والتعب لذلك لابد وأن يتم أختيار{" "}
                  <strong>صباغ</strong> على وعي ومعرفة بتلك العملية وبالطبع لن
                  تجد أ
                </span>
                <span>
                  فضل من صباغ الكويت انه لديه سنوات عديدة من الخبرة في هذا
                  المجال يستطيع أن يقدم أفضل الخدمات ومنها تركيب{" "}
                </span>
                <span>
                  ورق الحائط بطريقة إحترافية للغاية يتوافر لديه العديد من
                  الأشكال والأنواع المختلفة التى تتناسب مع كل غرفة ويسمح لك ايضا{" "}
                </span>
                بتركيبها في المطابخ كما أنه يوفر لك ورق جدران ثلاثي الابعاد ليس
                فقط ذلك أنه يمتلك موهبة في غاية الروعه وهى قدرته على{" "}
                <span>
                  الرسم على الحوائط وإختيار الرسومات الملائمة لكل مكان والمناسبة
                  للأعمار المختلفة، لذلك معه سوف تجد نفسك تحصل على أعمال في غاية
                  الروعة والجمال.
                </span>
              </p>
              <img src={img1} alt=" أفضل صباغ" title=" افضل صباغ الكويت" />
            </article>
          </div>
          <div className="box">
            <h2>ارقام الصباغ بالكويت</h2>
            <article className="info">
              <p>
                <span>
                  عميلنا العزيز إذا كنت تحتاج التعاقد مع صباغ شاطر ورخيص يمتلك
                  العديد من المهارات المختلفة وقادر على تقديم خدمات عالية الجودة{" "}
                </span>
                عليك هنا بالأتصال على <b>صباغ بالكويت</b>
                <b> </b>من خلال الأرقام الظاهرة لديك وسوف يتم الرد عليك في الحال
                للرد على كافة التساؤلات{" "}
                <span>
                  والأستفسارات التى تحتاج الإجابة عليها، أنه قادر على تشطيب كافة
                  المبانى المختلفة وتقديم العديد من الخدمات الرائعة، يمكنك زيارة{" "}
                </span>
                الموقع الالكتروني حتى يتم الإطلاع على كافة الأعمال التى تتميز
                بالأحترافية الشديدة وتكون على ثقة أنك سوف تحصل على منزل فخم بعد
                القيام بتشطيبه.
              </p>
              <img src={img1} alt=" رقم صباغ" title="رقم صباغ " />
            </article>
          </div>
          <div className="box">
            <h2>مزايا صباغ الكويت</h2>
            <article className="info">
              <p>
                <span>تتمتع الخدمات التي يقدمها </span>
                <b>صباغ الكويت</b>
                <span>
                  {" "}
                  في شركتنا بالعديد من المميزات التي لن تجدها إلا من خلالنا وفي
                  النقاط التالية سوف نقوم بتوضيح مزايا صباغ الكويت بايجاز شديد
                  وهي كالتالي:
                </span>
              </p>
              <img src={img1} alt=" معلم صباغ" title=" معلم صباغ" />
            </article>
            <ul className="me-4">
              <li aria-level="1" className="mt-2">
                <span>
                  يستخدم خامات دهانات و بوية مستوردة عالية الجودة منها اللامع
                  والنصف لامع والماط يمكنك اختيار ما يناسب احتياجك منها.
                </span>
              </li>
              <li aria-level="1" className="mt-2">
                <span>
                  لديها دهانات قابلة للغسيل تصلح للمنازل التي يوجد بها أطفال او
                  المطاعم او دور رعاية الاطفال والمدارس حيث تكون سهلة التنظيف.
                </span>
              </li>
              <li aria-level="1" className="mt-2">
                <span>
                  استخدام أحدث أساليب تطبيق الدهانات على الجدران حتى يكون الشكل
                  النهائي مميز وينال اعجاب العميل.
                </span>
              </li>
              <li aria-level="1" className="mt-2">
                <span>
                  يمكنه عمل اشكال مميزة من الجبس بورد ودهنه بأفضل الألوان التي
                  تتناسب مع الديكور العام للمكان.
                </span>
              </li>
              <li aria-level="1" className="mt-2">
                <span>
                  دائم التطوير من الخدمات التي يقدمها ومستوى الدهانات والديكورات
                  التي يقوم بتنفيذها.
                </span>
              </li>
              <li aria-level="1" className="mt-2">
                <span>
                  لديه خبرة كبيرة في مجال تنفيذ وتطبيق الدهانات والديكورات
                  الحديثة.
                </span>
              </li>
            </ul>
          </div>

          <div className="box">
            <h2>ارخص اسعار صباغ الكويت</h2>
            <article className="info">
              <p>
                <span>
                  عملية تشطيب المنازل من الأمور المكلفة للغاية لذلك يبحث الجميع
                  على صباغ محترف وأيضا يقم أسعار بسيطة تتماشى مع{" "}
                </span>
                ظروفهم هنا <b>صباغ في الكويت</b>&nbsp;يقدم أرخص الأسعار و
                التكاليف الممكنة بالإضافة إلي أنه يقدم العديد من العروض
                والخصومات{" "}
                <span>
                  المتنوعة كما يقدم العديد من التسهيلات حتى لا يشعر العميل
                  بالعبء المادي، تواصل مع وسوف تحصل على خدمات فريدة وايضا رخيصة.{" "}
                </span>
              </p>
              <img src={img1} alt="صباغ رخيص في الكويت" title="صباغ رخيص" />
            </article>
          </div>

          <div className="box">
            <h2>افضل صباغ فى الكويت</h2>
            <article className="info">
              <p>
                اذا كنت تبحث عن افضل و احدث تصميمات الثري دى التي اصبحت من احدث
                الصيحات فى مجال الديكورات. فان صباغ الكويت يمتلك باقة من
                الالبومات التي تضم افضل رسومات ورق الجدران التى تتناسب مع كل
                اذواق و اراء عملاء صباغ الكويت. ليس فقط الرسومات عزيزى العميل و
                لكن ايضا الجودة و السعر فصباغ الكويت يوفر لك ورق الجدار بالشكل
                الذى تريده و كذلك بافضل جودة و اعلي مستوى و ايضا اقل سعر. يقدم
                صباغ الكويت جبس بورد باشكال متعددة تتميز بالروعة و الجمال و كذلك
                تصميمات داخلية و خارجية من الجبس بورد و التى يتم صناعتها على
                ايدى نخبة من افضل المهندسين و الفنيين المختصين ذوى الخبرة
                الطويلة فى هذا المجال. مع استخدام افضل الخامات للحصول على اعلى
                جودة ممكنة للجبس بورد فصباغ الكويت يسعلى دائما للتميز و الجودة و
                ارضاء كل العملاء .
              </p>
              <img
                src={img1}
                alt="ارقام صباغ الكويت"
                title="ارقام صباغ الكويت"
              />
            </article>
          </div>

          <div className="box">
            <h2>صباغ شاطر ورخيص الكويت</h2>
            <article className="info">
              <p>
                اذا كنت تبحث عن<strong> صباغ رخيص بالكويت</strong> للقيام بكافة
                اعمال الاصباغ و تركيب ورق الجدران , اذا كنت تريد تجديد منزلك او
                عمل افضل ديكورات فى منزلك باحدث الاصباغ و الرسومات عليك بالتواصل
                مع صباغ شاطر بالكويت.
                <p>
                  لاشك اننا دائما نبحث عن افضل الخدمات و المنتجات بارخص الاسعار
                  لذا فان صباغ الكويت يعد اختيارا مميزا لك فهو يهتم بكل ما يبحث
                  عنه العميل من افضل الخدمات و احدث الديكورات و افضل الاسعار
                </p>
              </p>
              <img src={img1} alt="صباغ شاطر ورخيص" title="صباغ شاطر ورخيص" />
            </article>
          </div>
          <div className="box">
            <h2>صباغ ممتاز الكويت</h2>
            <article className="info">
              <p>
                يعد أبو احمد <strong>صباغ ممتاز الكويت</strong> وذلك لقدرته على
                القيام بجميع أعمال الصباغة باحترافية وجودة تنافسية، كما أنه يقوم
                بأعمال الصباغة بدقة كبيرة ومصداقية وكفاءة، إضافة إلى أنه يعمل
                على اتباع أفضل الوسائل التكنولوجية والعلمية المتطورة في أعمال
                الدهانات، وبالتالي تتميز جميع الأعمال التي يقوم بالجودة وعدم
                احتوائها على أي نوع من الأخطاء.
              </p>
              <img
                src={img1}
                alt="صباغ ممتاز الكويت"
                title="صباغ ممتاز الكويت"
              />
            </article>
          </div>
          <div className="box">
            <h2>معلم صباغ بالكويت</h2>
            <article className="info">
              <p>
                يعد ابو احمد أفضل <strong>معلم صباغ بالكويت</strong> يعمل على
                تقديم مختلف أعمال الدهانات بسرعة كبيرة، ويرجع ذلك إلى العمل في
                مجال الصباغة والديكورات منذ سنوات طويلة، ولكن لا تؤثر سرعة فريق
                العمل لدينا في أعمال الديكورات والصباغة على جودة الأعمال على
                الإطلاق، فنحن نوفر لعملائنا عمالة محترفة وخامات من أجود الأنواع.
              </p>
              <img
                src={img1}
                alt="معلم صباغ بالكويت"
                title="معلم صباغ بالكويت"
              />
            </article>
          </div>
          <div className="box">
            <h2>فني صباغ الكويت</h2>
            <article className="info">
              <p>
                يوفر أبو أحمد أفضل <strong>فني صباغ الكويت</strong> الذي يمتلك
                العديد من المميزات التي يعد من أهمها الخبرة في أعمال الصباغة
                بأنواعها، كما يمتلك الخبرة في تنفيذ أعمال الديكورات التي يحددها
                العميل بغض النظر عن نوع الديكورات التي يرغب العميل في تنفيذها،
                كما يمتلك الخبرة في إضافة تعديلات على التصميمات والديكورات.
              </p>
              <img src={img1} alt="فني صباغ الكويت" title="فني صباغ الكويت" />
            </article>
          </div>
          <div className="box">
            <h2>أفضل صباغ الكويت</h2>
            <article className="info">
              <p>
                يعتبر ابو احمد <strong>أفضل صباغ الكويت</strong> حيث يمتلك
                الخبرة الهائلة في استخدام ورق الحائط في عمل أفضل الديكورات
                بالمنازل، كما أنه يعمل على اختيار أفضل ألوان وأشكال ورق الحائط
                التي تتناسب مع نوع الغرف التي يتم وضعها فيها، بالإضافة إلى
                الاحترافية في عمل الديكورات في الشركات والمولات التجارية وغيرها
                من الأماكن بكفاءة واحترافية.
              </p>
              <img src={img1} alt="أفضل صباغ الكويت" title="أفضل صباغ الكويت" />
            </article>
          </div>
          <div className="box">
            <h2>رقم صباغ شاطر بالكويت</h2>
            <article className="info">
              <p>
                يوفر ابو احمد <strong>رقم صباغ شاطر بالكويت</strong> الذي يمتلك
                القدرة على تلبية طلبات الصباغة في مختلف أنحاء الكويت، حيث يستقبل
                اتصالات العملاء لطلب أعمال الديكورات وغيرها من الخدمات التي
                يوفرها للعملاء في أي وقت، ومن ثم يقوم بالتعامل مع طلبات الصباغة
                التي يطلبها العملاء عبر الهاتف.
              </p>
              <img
                src={img1}
                alt="رقم صباغ شاطر بالكويت"
                title="رقم صباغ شاطر بالكويت"
              />
            </article>
          </div>
          <div className="box">
            <h2>رقم صباغ بالكويت ورق جدران</h2>
            <article className="info">
              <p>
                يعمل ابو احمد على توفير{" "}
                <strong>رقم صباغ بالكويت ورق جدران</strong> 96594903036 الذي
                يتيح للعملاء الاستفسار عن أعمال الديكورات التي يستخدم فيها
                الصباغ ورق الحائط، كما يستطيع الأفراد من خلال التواصل على الرقم
                الاستفسار عن أسعار الديكورات وأعمال الصباغة التي يقوم بها
                الصباغ، حيث يوفر الصباغ لدينا أفضل وأجود الخدمات بأرخص الأسعار،
                لذلك يمكنك الحصول على خدمات الصباغة بأسعار مميزة عند الاتصال على
                شركتنا.
              </p>
              <img
                src={img1}
                alt="رقم صباغ بالكويت ورق جدران"
                title="رقم صباغ بالكويت ورق جدران"
              />
            </article>
          </div>
          <div className="box">
            <h2>رقم صباغ بالكويت رخيص</h2>
            <article className="info">
              <p>
                عليك الاتصال على <strong>رقم صباغ بالكويت رخيص</strong> ابو احمد
                96594903036 والذي يعرف عنه مدى أمانته في الوقت الذي يضعه للعملاء
                وفي مدى جودة الخامات التي يقوم باستخدامها، حيث يشهد العملاء بمدى
                مصداقيته، يقوم الصباغ بالعمل على تلبية طلبات العميل، يسعى الصباغ
                على توفير خدمات بشكل سريع لن تتوقعه مع سعر بسيط غير موجود في
                الأسواق لضمان تقديم خدمات متميزة لجميع العملاء.
              </p>
              <img
                src={img1}
                alt="رقم صباغ بالكويت رخيص"
                title="رقم صباغ بالكويت رخيص"
              />
            </article>
          </div>
          <div className="box">
            <h2>رقم صباغ الكويت</h2>
            <article className="info">
              <p>
                <strong>رقم صباغ الكويت</strong> ابو احمد 96594903036 يضمن لك
                حجز سريع لكافة خدمات الصباغة، حيث أن الهاتف متاح طوال اليوم حتى
                تتمكن من الحصول على الخدمة في أسرع وقت ممكن، كما أن الصباغ لا
                يتأخر عن تقديم الخدمة، حيث أنه يعرف أهمية تقديم الخدمات بالموعد
                المحدد حتى لا يضطر العميل من الانتظار، يتميز الصباغ محمد
                بالمصداقية في مواعيد الخدمات بين مختلف العملاء ولذلك لديه سمعة
                طيبة بين العملاء الذين حصلوا على الخدمة من خلاله.
              </p>
              <img
                src={img1}
                alt="رقم صباغ بالكويت رخيص"
                title="رقم صباغ بالكويت رخيص"
              />
            </article>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Sec2;
