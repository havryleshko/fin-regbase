 "use client";

import { motion } from "framer-motion";

const question =
  "Under the FCA Consumer Duty, what counts as a breach of the \"act in good faith\" rule at the product design stage?";

const answerParagraphs = [
  "Acting in good faith requires honesty, fair and open dealing, and conduct consistent with the reasonable expectations of retail customers (PS22/9 §5.5).",
  "FG22/5 §5.12 names specific bad-faith patterns at product design stage: features designed to exploit customers' behavioural biases (e.g. overvaluing immediate benefits and discounting future costs); algorithms or AI that embed or amplify bias unless objectively justified; product variations added to make comparison with competitors harder; and pricing structures that are not presented in a way that makes total cost easy to understand.",
  "The FCA's February 2024 implementation review adds that \"wait and see\" behaviour - knowing of an issue and waiting for the FCA to intervene - is itself a breach of the cross-cutting proactivity obligation.",
];

const sources = [
  "FCA PS22/9 §5.5",
  "FCA FG22/5 §5.9-§5.14",
  "FCA Consumer Duty implementation review (February 2024)",
];

const sourceArticleUrl =
  "https://github.com/havryleshko/fin-regbase/blob/main/wiki/concepts/consumer-duty-cross-cutting-rules.md";

export function ExampleQueryBlock() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
        Example query
      </p>
      <p className="mt-1 text-xs text-text-secondary">UK · FCA Consumer Duty (illustrative)</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
        What an agent gets back
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface"
      >
        <div className="border-b border-border px-6 py-4 md:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
            Prompt
          </p>
          <p className="mt-2 text-base leading-7 text-text-primary md:text-lg">
            {question}
          </p>
        </div>

        <div className="bg-background px-6 py-6 md:px-8 md:py-8">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
            Agent response
          </p>
          <div className="mt-3 space-y-4 text-sm leading-7 text-text-primary md:text-base md:leading-8">
            {answerParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6 border-t border-border pt-4">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
              Cited sources
            </p>
            <ul className="mt-2 space-y-1 text-sm text-text-secondary">
              {sources.map((source) => (
                <li key={source}>{source}</li>
              ))}
            </ul>
            <a
              href={sourceArticleUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              View source article →
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
