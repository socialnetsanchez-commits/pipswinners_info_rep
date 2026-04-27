import { useEffect } from 'react';
import './styles.css';

const pageMarkup = `<!-- NAV -->
<nav id="navbar">
  <a href="#hero" class="nav-logo">PW</a>
  <ul class="nav-links">
    <li><a href="#vision">Visión</a></li>
    <li><a href="#solucion">Solución</a></li>
    <li><a href="#inversion">Inversión</a></li>
    <li><a href="#calculadora">Calculadora</a></li>
    <li><a href="#resultados">Resultados</a></li>
  </ul>
  <a href="https://t.me/PIPSWINNERSCOMMUNITY" target="_blank" rel="noopener" class="nav-cta">Únete al Telegram</a>
</nav>

<!-- ① HERO -->
<section id="hero">
  <div class="hero-inner container">
    <p class="hero-eyebrow">Trading Automatizado · Exclusivamente XAUUSD · Oro al Contado</p>
    <h1 class="hero-title">Pips<br><em>Winners</em></h1>
    <p class="hero-slogan">"No Risk, No Ferrari"</p>
    <p class="hero-sub">Soluciones de trading automatizado para inversores modernos. Operamos exclusivamente en <strong style="color:var(--gold);font-weight:400">XAUUSD — Oro al Contado</strong>, uno de los activos más líquidos y consistentes del mercado global.</p>
    <div class="hero-actions">
      <a href="https://t.me/PIPSWINNERSCOMMUNITY" target="_blank" rel="noopener" class="btn-primary">Unirse a la Comunidad</a>
      <a href="#como" class="btn-ghost">Cómo Funciona</a>
    </div>
    <div class="hero-metrics">
      <div class="metric-item">
        <div class="metric-num">100%</div>
        <div class="metric-label">Automatizado</div>
      </div>
      <div class="metric-item">
        <div class="metric-num">0</div>
        <div class="metric-label">Intervención Emocional</div>
      </div>
      <div class="metric-item">
        <div class="metric-num">24/7</div>
        <div class="metric-label">Monitorización</div>
      </div>
      <div class="metric-item">
        <div class="metric-num">30%</div>
        <div class="metric-label">Solo sobre beneficios</div>
      </div>
    </div>

    <!-- Decorative chart SVG -->
    <svg class="hero-chart" viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="0,280 60,240 120,255 180,200 240,175 300,145 360,120 420,95 480,70 540,40 600,20"
        stroke="#c8a86b" stroke-width="2" fill="none"/>
      <polyline points="0,300 60,290 120,295 180,260 240,250 300,220 360,200 420,180 480,155 540,120 600,90"
        stroke="#666" stroke-width="1" fill="none" stroke-dasharray="4 4"/>
    </svg>
  </div>
</section>

<!-- ② VISIÓN -->
<section id="vision">
  <div class="container">
    <div class="vision-grid">
      <div class="reveal">
        <p class="label">Propuesta de Valor</p>
        <div class="divider"></div>
        <blockquote class="vision-quote">
          La ventaja del inversor moderno no es el talento — es la <em>estructura</em> que elimina el error humano.
        </blockquote>
      </div>
      <div class="vision-points">
        <div class="vision-point reveal reveal-delay-1">
          <h4>Eficiencia algorítmica</h4>
          <p>Las decisiones se ejecutan en milisegundos, guiadas exclusivamente por datos y parámetros definidos con precisión.</p>
        </div>
        <div class="vision-point reveal reveal-delay-2">
          <h4>Automatización total</h4>
          <p>El sistema opera de forma continua, sin necesidad de intervención manual ni supervisión constante por parte del inversor.</p>
        </div>
        <div class="vision-point reveal reveal-delay-3">
          <h4>Decisiones basadas en datos</h4>
          <p>Cada operación responde a condiciones de mercado verificadas, no a intuiciones ni impulsos emocionales.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ③ PROBLEMA -->
<section id="problema">
  <div class="container">
    <div class="section-header reveal">
      <p class="label">El Problema</p>
      <div class="divider"></div>
      <h2 class="section-title">Por qué falla el inversor tradicional</h2>
      <p class="section-sub">Los mercados no perdonan la inconsistencia. Estos son los tres pilares del fracaso sistemático.</p>
    </div>
    <div class="problems-grid">
      <div class="problem-card reveal">
        <div class="problem-num">01</div>
        <h3>Volatilidad del mercado</h3>
        <p>Los mercados financieros son impredecibles a corto plazo. Sin un sistema robusto, el capital queda expuesto a movimientos que ningún trader manual puede anticipar con consistencia.</p>
      </div>
      <div class="problem-card reveal reveal-delay-1">
        <div class="problem-num">02</div>
        <h3>Falta de consistencia</h3>
        <p>El trading manual genera resultados erráticos. La inconsistencia en la ejecución destruye la ventaja estadística incluso de las mejores estrategias.</p>
      </div>
      <div class="problem-card reveal reveal-delay-2">
        <div class="problem-num">03</div>
        <h3>Dependencia humana</h3>
        <p>Fatiga, miedo, codicia y sesgo de confirmación contaminan cada decisión. El factor humano es el mayor riesgo en cualquier operación financiera.</p>
      </div>
    </div>
  </div>
</section>

<!-- ④ SOLUCIÓN -->
<section id="solucion">
  <div class="container">
    <div class="section-header reveal">
      <p class="label">Nuestra Solución</p>
      <div class="divider"></div>
      <h2 class="section-title">Tecnología que trabaja mientras usted descansa</h2>
    </div>
    <div class="solution-grid">
      <div class="sol-item reveal">
        <svg class="sol-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1">
          <rect x="4" y="8" width="24" height="16" rx="1"/><line x1="10" y1="14" x2="10" y2="18"/><line x1="14" y1="12" x2="14" y2="18"/><line x1="18" y1="15" x2="18" y2="18"/><line x1="22" y1="11" x2="22" y2="18"/>
        </svg>
        <h3>Inteligencia Artificial aplicada</h3>
        <p>Sistema automatizado basado en algoritmos de IA entrenados específicamente para operar <strong style="color:var(--off-white);font-weight:400">XAUUSD (Oro al Contado)</strong> — un mercado con alta liquidez, spreads controlados y comportamiento técnico predecible.</p>
      </div>
      <div class="sol-item reveal reveal-delay-1">
        <svg class="sol-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1">
          <circle cx="16" cy="16" r="10"/><polyline points="16,10 16,16 21,16"/>
        </svg>
        <h3>Estrategia de trader experto</h3>
        <p>Desarrollada y validada por un trader con años de experiencia real en los mercados. La estrategia ha sido refinada y trasladada a código de ejecución precisa.</p>
      </div>
      <div class="sol-item reveal reveal-delay-2">
        <svg class="sol-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1">
          <path d="M16 4 L28 10 L28 22 L16 28 L4 22 L4 10 Z"/><polyline points="11,16 14,19 21,13"/>
        </svg>
        <h3>Ejecución disciplinada</h3>
        <p>Cada operación se ejecuta según parámetros predefinidos. No existen decisiones impulsivas, salidas emocionales ni modificaciones de riesgo no autorizadas.</p>
      </div>
      <div class="sol-item reveal reveal-delay-3">
        <svg class="sol-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1">
          <circle cx="16" cy="10" r="4"/><circle cx="8" cy="24" r="4"/><circle cx="24" cy="24" r="4"/>
          <line x1="16" y1="14" x2="8" y2="20"/><line x1="16" y1="14" x2="24" y2="20"/>
        </svg>
        <h3>Supervisión continua</h3>
        <p>El sistema monitoriza condiciones de mercado en tiempo real las 24 horas del día, adaptando la exposición según los parámetros de gestión de riesgo establecidos.</p>
      </div>
    </div>
  </div>
</section>

<!-- ⑤ CÓMO FUNCIONA -->
<section id="como">
  <div class="container">
    <div class="section-header reveal">
      <p class="label">Proceso</p>
      <div class="divider"></div>
      <h2 class="section-title">Simple para el inversor, sofisticado por dentro</h2>
    </div>
    <div class="steps-container">
      <div class="step-line"></div>
      <div class="step reveal">
        <div class="step-num-wrap"><span class="step-num">I</span></div>
        <div class="step-content">
          <h3>Apertura y vinculación de cuenta</h3>
          <p>El inversor abre su cuenta en el bróker recomendado y concede acceso al sistema mediante claves API de solo ejecución. Usted mantiene siempre el control total sobre sus fondos.</p>
        </div>
      </div>
      <div class="step reveal reveal-delay-1">
        <div class="step-num-wrap"><span class="step-num">II</span></div>
        <div class="step-content">
          <h3>Configuración y activación</h3>
          <p>El sistema se calibra según el capital disponible y el perfil de riesgo acordado. La activación se produce en menos de 24 horas desde la vinculación.</p>
        </div>
      </div>
      <div class="step reveal reveal-delay-2">
        <div class="step-num-wrap"><span class="step-num">III</span></div>
        <div class="step-content">
          <h3>Ejecución automatizada continua</h3>
          <p>El algoritmo opera de forma autónoma. Abre, gestiona y cierra operaciones según las condiciones del mercado, sin requerir intervención del inversor.</p>
        </div>
      </div>
      <div class="step reveal reveal-delay-3">
        <div class="step-num-wrap"><span class="step-num">IV</span></div>
        <div class="step-content">
          <h3>Reporting y transparencia total</h3>
          <p>El inversor tiene acceso en tiempo real al historial de operaciones, métricas de rendimiento y estado de la cuenta directamente desde su plataforma de bróker.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ⑥ INVERSIÓN -->
<section id="inversion">
  <div class="container">
    <div class="section-header reveal">
      <p class="label">Capital de Inversión</p>
      <div class="divider"></div>
      <h2 class="section-title">Nuestro servicio es completamente gratuito</h2>
      <p class="section-sub">No cobramos nada por gestionar su cuenta. Los importes indicados son el <strong style="color:var(--off-white);font-weight:400">capital inicial que usted deposita en su propia cuenta de bróker</strong> — fondos que permanecen siempre bajo su control y a su nombre.</p>
    </div>

    <!-- Free service notice -->
    <div class="reveal" style="border:1px solid var(--gold-dim);padding:2rem 2.5rem;margin-bottom:3rem;display:flex;align-items:flex-start;gap:1.5rem;">
      <div style="color:var(--gold);font-family:var(--serif);font-size:2rem;line-height:1;flex-shrink:0;">0</div>
      <div>
        <p style="font-size:0.72rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-bottom:0.4rem;">Coste del servicio</p>
        <p style="font-size:0.9rem;color:var(--light-muted);line-height:1.7;">Pips Winners no cobra ninguna tarifa de acceso, cuota mensual ni comisión de entrada. Solo percibimos el 30% de los beneficios generados — si no hay beneficios, no hay cobro. Su capital es suyo en todo momento.</p>
      </div>
    </div>

    <div class="inv-grid">
      <div class="inv-card reveal">
        <div class="inv-type">Cuenta Cent</div>
        <div class="inv-amount"><span>$</span>400</div>
        <p class="inv-desc">Capital mínimo recomendado para operar con esta modalidad. Este importe se deposita directamente en su cuenta de bróker — no es un pago a Pips Winners.</p>
        <ul class="inv-features">
          <li>Capital inicial mínimo: $400 USD en su cuenta</li>
          <li>Misma estrategia y algoritmo que cuentas mayores</li>
          <li>Gestión de riesgo proporcional al capital</li>
          <li>Sin plazo mínimo de permanencia</li>
          <li>Retiro de fondos flexible en cualquier momento</li>
        </ul>
      </div>
      <div class="inv-card featured reveal reveal-delay-1">
        <div class="inv-badge">Recomendado</div>
        <div class="inv-type">Cuenta STP</div>
        <div class="inv-amount"><span>€</span>500</div>
        <p class="inv-desc">Capital mínimo recomendado para cuentas STP con acceso directo al mercado interbancario. El depósito es suyo — Pips Winners no recibe ningún pago de entrada.</p>
        <ul class="inv-features">
          <li>Capital inicial mínimo: 500€ en su cuenta</li>
          <li>Ejecución STP sin mesa de operaciones</li>
          <li>Spreads de mercado real</li>
          <li>Reporting avanzado de rendimiento</li>
          <li>Soporte prioritario</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ⑦ MODELO -->
<section id="modelo">
  <div class="container">
    <div class="model-row">
      <div class="model-left reveal">
        <p class="label">Modelo de Negocio</p>
        <div class="divider"></div>
        <p class="section-sub" style="margin-bottom:2.5rem;">Total alineación de intereses. Ganamos cuando usted gana.</p>
        <div class="model-big"><span>%</span>30</div>
        <p class="model-label">Únicamente sobre beneficios generados</p>
        <p style="color:var(--muted);font-size:0.85rem;margin-top:1.5rem;max-width:400px;">Sin comisiones fijas, sin cuotas de acceso, sin costes mensuales. Nuestro único ingreso es una participación del 30% sobre los beneficios netos que generamos para usted.</p>
      </div>
      <div class="model-right reveal reveal-delay-1">
        <div class="model-features">
          <div class="model-feat">
            <h4>Sin costes fijos</h4>
            <p>No existe ningún cargo si el sistema no genera beneficios. El riesgo financiero es exclusivamente del mercado, no de nuestra relación.</p>
          </div>
          <div class="model-feat">
            <h4>Alineación total de intereses</h4>
            <p>Nuestra rentabilidad depende directamente de la suya. Esto garantiza que cada decisión del sistema priorice la preservación y crecimiento de su capital.</p>
          </div>
          <div class="model-feat">
            <h4>Transparencia absoluta</h4>
            <p>Acceso completo al historial de operaciones, métricas en tiempo real y cuenta auditada en todo momento desde su propio panel de bróker.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ⑧ VENTAJAS -->
<section id="ventajas">
  <div class="container">
    <div class="section-header reveal">
      <p class="label">Ventajas Competitivas</p>
      <div class="divider"></div>
      <h2 class="section-title">Por qué Pips Winners</h2>
    </div>
    <div class="adv-grid">
      <div class="adv-item reveal">
        <div class="adv-icon">∞</div>
        <h3>Automatización Completa</h3>
        <p>El sistema no duerme, no tiene miedo y no comete errores emocionales. Opera con la misma precisión a las 3 AM que a mediodía.</p>
      </div>
      <div class="adv-item reveal reveal-delay-1">
        <div class="adv-icon">◆</div>
        <h3>Estrategia Validada</h3>
        <p>Años de desarrollo y refinamiento. La estrategia ha demostrado rentabilidad consistente bajo diversas condiciones de mercado.</p>
      </div>
      <div class="adv-item reveal reveal-delay-2">
        <div class="adv-icon">≡</div>
        <h3>Gestión sin Emociones</h3>
        <p>El algoritmo sigue el plan siempre. No existe el pánico, la codicia ni la duda. Solo ejecución precisa de la estrategia.</p>
      </div>
      <div class="adv-item reveal reveal-delay-3">
        <div class="adv-icon">◯</div>
        <h3>Solo XAUUSD</h3>
        <p>Operamos exclusivamente en Oro al Contado (XAUUSD). Un único activo, dominado en profundidad: máxima liquidez global, alta volatilidad predecible y ventaja técnica sólida.</p>
      </div>
    </div>
  </div>
</section>

<!-- ⑨ RIESGO -->
<section id="riesgo">
  <div class="container">
    <div class="section-header reveal">
      <p class="label">Gestión del Riesgo</p>
      <div class="divider"></div>
      <h2 class="section-title">La seguridad no es una opción, es el diseño</h2>
    </div>
    <div class="risk-banner reveal">
      <h2>"El objetivo no es maximizar la ganancia,<br>es <em>optimizar la consistencia</em> protegiendo el capital."</h2>
      <div class="risk-stats">
        <div class="risk-stat">
          <h3>Integrada</h3>
          <p>Gestión de riesgo en el sistema</p>
        </div>
        <div class="risk-stat">
          <h3>Limitada</h3>
          <p>Exposición máxima por operación</p>
        </div>
        <div class="risk-stat">
          <h3>Controlado</h3>
          <p>Drawdown máximo definido</p>
        </div>
        <div class="risk-stat">
          <h3>Continua</h3>
          <p>Monitorización 24/7</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ⑩ RESULTADOS -->
<section id="resultados">
  <div class="container">
    <div class="section-header reveal">
      <p class="label">Rendimiento</p>
      <div class="divider"></div>
      <h2 class="section-title">Crecimiento disciplinado y sostenido</h2>
      <p class="section-sub">No prometemos rendimientos extraordinarios. Prometemos consistencia. La diferencia entre especulación e inversión.</p>
    </div>

    <!-- No chart - honest messaging -->
    <div class="reveal" style="border:1px solid var(--border);padding:3.5rem;margin-top:4rem;text-align:center;">
      <p style="font-family:var(--serif);font-size:clamp(1.2rem,2.5vw,1.8rem);font-weight:300;color:var(--white);line-height:1.5;max-width:680px;margin:0 auto;">
        "Los resultados reales se comparten de forma transparente<br>dentro de nuestra comunidad de inversores."
      </p>
      <div class="divider divider-center" style="margin-top:2rem;"></div>
      <p style="font-size:0.82rem;color:var(--muted);max-width:520px;margin:0 auto;">
        No publicamos gráficos de rendimiento sin respaldo real. Si desea conocer el historial operativo verificado del sistema, únase a nuestra comunidad en Telegram donde compartimos resultados auténticos y auditables.
      </p>
      <a href="https://t.me/PIPSWINNERSCOMMUNITY" target="_blank" rel="noopener" class="btn-ghost" style="display:inline-block;margin-top:2.5rem;">
        Ver resultados reales en Telegram →
      </a>
    </div>

    <div class="result-cards reveal">
      <div class="result-card">
        <div class="result-num">Consistente</div>
        <div class="result-sub">Rendimiento mensual</div>
      </div>
      <div class="result-card">
        <div class="result-num">Controlado</div>
        <div class="result-sub">Drawdown máximo</div>
      </div>
      <div class="result-card">
        <div class="result-num">Validada</div>
        <div class="result-sub">Estrategia probada</div>
      </div>
    </div>
  </div>
</section>

<!-- CALCULADORA DE PIPS -->
<section id="calculadora">
  <div class="container">
    <div class="section-header reveal">
      <p class="label">Herramienta Gratuita</p>
      <div class="divider"></div>
      <h2 class="section-title">Calculadora de Pips</h2>
      <p class="section-sub">Convierte pips a euros o dólares al instante. Una herramienta esencial para que cualquier inversor calcule con precisión el valor real de cada movimiento del mercado.</p>
    </div>

    <div class="calc-wrapper reveal">
      <div class="calc-topbar">
        <div class="calc-dot" style="background:#3a3a3a;"></div>
        <div class="calc-dot" style="background:#3a3a3a;"></div>
        <div class="calc-dot" style="background:var(--gold-dim);"></div>
        <span class="calc-url">pipswinnerscalculator.vercel.app</span>
      </div>
      <iframe
        class="calc-frame"
        src="https://pipswinnerscalculator.vercel.app/"
        title="Calculadora de Pips — Pips Winners"
        loading="lazy"
        allow="clipboard-write"
      ></iframe>
      <a href="https://pipswinnerscalculator.vercel.app/" target="_blank" rel="noopener" class="calc-open-btn">
        Abrir calculadora en ventana completa →
      </a>
    </div>
  </div>
</section>

<!-- ⑪ CTA -->
<section id="cta">
  <div class="container">
    <div class="cta-inner">
      <p class="label" style="text-align:center;">Comunidad</p>
      <div class="divider divider-center"></div>
      <h2 class="cta-title reveal">¿Listo para operar<br>en <em>XAUUSD</em> con sistema?</h2>
      <p class="cta-sub reveal">Toda la información, soporte y acceso al sistema se gestiona a través de nuestra comunidad de Telegram. Únase para conocer todos los detalles.</p>
      <div class="cta-buttons reveal">
        <a href="https://t.me/PIPSWINNERSCOMMUNITY" target="_blank" rel="noopener" class="btn-primary">
          <svg style="display:inline;vertical-align:middle;margin-right:0.5rem;width:16px;height:16px;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/></svg>
          Unirse a la Comunidad en Telegram
        </a>
      </div>
      <p class="reveal" style="margin-top:1.5rem;font-size:0.75rem;color:var(--muted);letter-spacing:0.05em;">
        @PIPSWINNERSCOMMUNITY · Acceso gratuito · Soporte directo
      </p>
    </div>
  </div>
</section>

<!-- ⑫ CIERRE -->
<section id="cierre">
  <div class="container">
    <div class="reveal">
      <blockquote class="closing-quote">
        "Invertir no es cuestión de suerte,<br>sino de <em>estructura, disciplina y tecnología</em>."
      </blockquote>
      <p class="closing-sig">Pips Winners · Trading Automatizado · Est. 2026</p>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-logo">Pips Winners</div>
  <p class="footer-note">El trading en los mercados financieros implica un riesgo significativo de pérdida. Los rendimientos pasados no garantizan resultados futuros. Esta información tiene carácter exclusivamente ilustrativo y no constituye asesoramiento financiero regulado.</p>
  <div style="display:flex;flex-direction:column;align-items:flex-end;gap:0.5rem;">
    <a href="https://t.me/PIPSWINNERSCOMMUNITY" target="_blank" rel="noopener" style="font-size:0.72rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold);text-decoration:none;transition:color 0.3s;" onmouseover="this.style.color='var(--gold-light)'" onmouseout="this.style.color='var(--gold)'">@PIPSWINNERSCOMMUNITY</a>
    <div class="footer-right">© 2026 Pips Winners</div>
  </div>
</footer>`;

export default function App() {
  useEffect(() => {
    const navbar = document.getElementById('navbar');

    const handleScroll = () => {
      navbar?.classList.toggle('scrolled', window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    reveals.forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
